import {InspectorControls,} from "@wordpress/block-editor";
import {PanelBody, SelectControl, RangeControl, ColorPicker, FontSizePicker } from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";

let debounceTimeout = null;
const Edit = ({attributes, setAttributes}) => {
    const [countries, setCountries] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [output, setOutput] = useState('');

    const debounce = (attributeName, attributeValue) => {
      clearTimeout(debounceTimeout);
      setAttributes({[attributeName]: attributeValue});
      debounceTimeout = setTimeout(() => {
        setAttributes({ 'debounce': [].concat(attributeName) });
      }, 700);
    }

    const preSetFontSizes = [
        {
            name:  'Small' ,
            slug: 'small',
            size: 12,
        },
        {
            name:  'Big' ,
            slug: 'big',
            size: 26,
        },
    ];

    useEffect(()=> {
    if(attributes.sport === 'football' || attributes.sport === 'basketball') {
        fetch(ajaxurl, {
        method: "POST",
        headers: new Headers( {
            'Content-Type': 'application/x-www-form-urlencoded',
        } ),
        body: `action=bc_get_countries&sport=${attributes.sport}`,
    })
        .then((response) => response.json())
        .then(result => {
        let wholeResult = JSON.parse(result.data);
        wholeResult = wholeResult.result.map(country => {
            return { value: country.country_key, label: country.country_name }
        })
        wholeResult.unshift({ value: 0, label: "Select Country"})
        setCountries(wholeResult);
        });
    }
    }, [attributes.sport]);

    useEffect(() => {
    if(attributes.sport && attributes.country != 0) {
        fetch(ajaxurl,
        {
            method: "POST",
            headers: new Headers( {
            'Content-Type': 'application/x-www-form-urlencoded',
            } ),
            body: `action=bc_get_leagues&sport=${attributes.sport}&country=${attributes.country}`,
        })
        .then((response) => response.json())
        .then(result => {
            let wholeResult = JSON.parse(result.data);
            wholeResult = wholeResult.result.map(league => {
            return { value: league.league_key, label: league.league_name }
            })
            wholeResult.unshift({ value: 0, label: "Select League"})
            setLeagues(wholeResult)
        });
        }
    },[attributes.country]);

    useEffect(() => {
      fetch(ajaxurl,
        {
        method: "POST",
        headers: new Headers( {
            'Content-Type': 'application/x-www-form-urlencoded',
        } ),
        body: `action=bc_get_matches&sport=${attributes.sport}&country=${attributes.country}&league=${attributes.league}&scrollamount=${attributes.scrollamount}&bgColor=${attributes.bgColor}&fontSize=${attributes.fontSize}&textColor=${attributes.textColor}`,
        })
        .then((response) => response.json())
        .then(result => {
        setOutput(result);
        });
    }, [attributes.sport, attributes.country, attributes.league, attributes.debounce]);

  return ([
    <div dangerouslySetInnerHTML={{__html: output}}/>,
    <InspectorControls>
      <PanelBody>
        <SelectControl
          label="Sport"
          value={ attributes.sport }
          options={ [
            { label: 'Football', value: 'football' },
            { label: 'Tennis', value: 'tennis' },
            { label: 'Basketball', value: 'basketball' },
          ] }
          onChange={ ( sport ) => setAttributes({ sport }) }
          __nextHasNoMarginBottom
        />
        {(attributes.sport === 'football' || attributes.sport === 'basketball') && <SelectControl
          label="Countries"
          value={ attributes.country }
          options={ countries }
          onChange={ ( country ) => setAttributes({ country }) }
        />}
        {attributes.country != 0 && <SelectControl
          label="Leagues"
          value={ attributes.league }
          options={ leagues }
          onChange={ ( league ) => setAttributes({ league }) }
        />}
        <RangeControl
          label="Show for next number of days:"
          value={ attributes.nextNumberOfDays }
          min={ 1 }
          max={ 14 }
          onChange={ ( nextNumberOfDays ) => setAttributes({  nextNumberOfDays })}
        />
        <RangeControl
          label="Slider Speed"
          value={ attributes.scrollamount }
          onChange={ ( scrollamount ) => debounce('scrollamount', scrollamount) }
          min={ 20 }
          max={ 200 }
        />
        <p>Background Color</p>
        <ColorPicker
          color={attributes.bgColor}
          onChange={( bgColor ) => debounce('bgColor', bgColor) }
          enableAlpha
        />
        <p>Text Color</p>
        <ColorPicker
            color={attributes.textColor}
            onChange={( textColor ) => debounce('textColor', textColor) }
            enableAlpha
        />
        <FontSizePicker
            value={ attributes.fontSize }
            fontSizes={ preSetFontSizes }
            __nextHasNoMarginBottom
            fallbackFontSize={ 12 }
            onChange={( fontSize ) => setAttributes( { fontSize } )}
        />
      </PanelBody>
    </InspectorControls>
  ])
}
export default Edit;