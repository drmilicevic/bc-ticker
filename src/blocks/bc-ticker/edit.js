import {InspectorControls,} from "@wordpress/block-editor";
import {PanelBody, SelectControl, RangeControl, ColorPicker, FontSizePicker } from "@wordpress/components";
import {useEffect, useState} from "@wordpress/element";

const Edit = ({attributes, setAttributes}) => {
    const [countries, setCountries] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const [output, setOutput] = useState('');

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
        body: `action=bc_get_matches&sport=${attributes.sport}&country=${attributes.country}&league=${attributes.league}`,
        })
        .then((response) => response.json())
        .then(result => {
        setOutput(result);
        });
    }, [attributes]);

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
          label="Slider Speed"
          value={ attributes.scrollamount }
          onChange={ ( scrollamount ) => setAttributes( { scrollamount } ) }
          min={ 20 }
          max={ 200 }
        />
        {attributes.bgColor != 0 && <ColorPicker
          color={attributes.bgColor}
          onChange={( bgColor ) => setAttributes( { bgColor } )}
          enableAlpha
        />}
          {attributes.textColor != 0 && <ColorPicker
              color={attributes.textColor}
              onChange={( textColor ) => setAttributes( { textColor } )}
              enableAlpha
          />}

          {attributes.fontSize != 0 && <FontSizePicker
              value={ attributes.fontSize }
              fontSizes={ preSetFontSizes }
              __nextHasNoMarginBottom
              fallbackFontSize={ 12 }
              onChange={( fontSize ) => setAttributes( { fontSize } )}
          />}
      </PanelBody>
    </InspectorControls>
  ])
}
export default Edit;