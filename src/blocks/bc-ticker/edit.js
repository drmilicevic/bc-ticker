import { useBlockProps } from '@wordpress/block-editor';

import { InspectorControls } from '@wordpress/block-editor';
import { TextControl, PanelBody, PanelRow, DatePicker, SelectControl, RangeControl } from '@wordpress/components';
import {useEffect, useState } from '@wordpress/element';
const Edit = ({attributes, setAttributes}) => {

    const [leagues, setLeagues] = useState('');
    const [countries, setCountries] = useState('');

    const { dateFrom } = attributes;

    useEffect(() => {

        fetch(`https://apiv2.allsportsapi.com/${attributes.sport}/?met=Countries&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd`)
            .then((response) => response.json()).then((countries) => {
            let options = [];

            if (countries.result) {
                countries.result.map((country) => {
                    options.push({
                        value: country.country_key,
                        label: country.country_name
                    })
                })
                options.unshift({
                    value: '0',
                    label: "Select Country"
                })
                setCountries(options);
            }
        })
            .catch((error) => {
                console.log('Error');
                console.error(error);
            });
    },[attributes.sport])

    useEffect(() => {
        fetch(`https://apiv2.allsportsapi.com/${attributes.sport}/?met=Leagues&APIkey=c48d0beffaba746a01c72aa7802d8e3cedd005f4471e488e542bb810b21c02fd&countryId=${attributes.countryId}`)
            .then((response) => response.json())
            .then((leagues) => {
                let options = [];

                if (leagues.result) {
                    leagues.result.map((league) => {
                        options.push({
                            value: league.league_key,
                            label: league.league_name
                        })
                    })
                    options.unshift({
                        value: '0',
                        label: "Select Leagues"
                    })
                    setLeagues(options);
                }
        })
            .catch((error) => {
                console.log('Error');
                console.error(error);
            });
    },[attributes.countryId])

    console.log(attributes.nextNumberOfDays);

    return (
        <div { ...useBlockProps()}>
            <InspectorControls key="setting">
                <PanelBody title="Ticker Settings" initialOpen={ false }>
                    <TextControl
                        label="Ticker title"
                        onChange={ ( title ) => setAttributes( { title } ) }
                        value={ attributes.title }
                    />
                    <SelectControl
                        label="Sports"
                        value={ attributes.sport }
                        options={ [
                            { label: 'Football', value: 'football' },
                            { label: 'Basketball', value: 'basketball' },
                        ] }
                        onChange={ ( newSport ) => {
                            setAttributes({
                                sport: newSport,
                                countryId: undefined,
                                leagueId: undefined,
                            });

                            setLeagues('');

                        }}

                    />
                    <SelectControl
                        label="Countries"
                        value ={ attributes.countryId}
                        options={ countries }
                        onChange={ ( countryId ) => setAttributes({
                            countryId : countryId,
                            leagueId: undefined,
                        })}
                    />
                    <SelectControl
                        label="Leagues"
                        value ={ attributes.leagueId}
                        options={ leagues }
                        onChange={ ( leagueId ) => setAttributes({ leagueId })}
                    />
                </PanelBody>
                <PanelBody title="Date Settings" initialOpen={ false }>
                    <PanelRow>
                        <DatePicker
                            currentDate={ attributes.dateFrom }
                            onChange={ ( dateFrom ) => {
                                let date = new Date(dateFrom);
                                let day = date.getDate();
                                let month = date.getMonth()+1;

                                if (month < 10) {
                                    month = `0${month}`;
                                }

                                if (day < 10 ) {
                                    day = `0${day}`;
                                }

                                let year = date.getFullYear();
                                dateFrom = `${year}-${month}-${day}`;
                                setAttributes( { dateFrom } )
                            } }
                        />
                    </PanelRow>

                    <PanelRow>
                        <RangeControl
                            label="Show for next number of days:"
                            value={ attributes.nextNumberOfDays }
                            min={ 1 }
                            max={ 14 }
                            onChange={ ( nextNumberOfDays ) => setAttributes({  nextNumberOfDays })}
                        />
                    </PanelRow>

                </PanelBody>
            </InspectorControls>
            block
        </div>
    );
}

export default Edit;