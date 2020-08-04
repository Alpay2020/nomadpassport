import React, {useContext, useState} from "react";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {fetchVisaInfo} from "../../context/visaInfo/VisaInfoActions";
import {VisaInfoDispatchContext, VisaInfoStateContext} from "../../context/visaInfo/VisaInfoContext";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import {countryList} from "./CountryList";

const useStyles = makeStyles({
    formControl: {
        margin: 1,
        minWidth: 120,
    },
    flexy: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    card:{
        margin: 10,
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        color: '#c6b5b5',
        borderRadius: '10px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    },
    searchButton:{
        backgroundColor: '#e2e6e9',
        boxShadow:  '9px 9px 18px #c0c4c6, -9px -9px 18px #ffffff',
        color: '#242323',
        borderRadius: '56px',
        background: 'linear-gradient(145deg, #f2f6f9, #cbcfd2);',
    }
});

export default function SearchVisaInfoForm() {

    const dispatch = useContext(VisaInfoDispatchContext);
    const visaInfo = useContext(VisaInfoStateContext);
    const classes = useStyles();
    const [citizenship, setCitizenship] = useState('');
    const [id, setId] = useState('');

    function handleCitizenshipChange(event) {
        setCitizenship(event.target.value);
    }
    function handleIdChange(event) {
        setId(event.target.value);
    }
    function handleSubmit(event) {
        event.stopPropagation();
        fetchVisaInfo(dispatch, id);
    }
    return (
        <Card className={classes.card}>
        <form
        >
            <Box py={3} className={classes.flexy}>
            <FormControl className={classes.formControl}>
                <InputLabel id="citizenship">Citizenship</InputLabel>
                <Select
                    labelId="citizenship"
                    id="citizenship"
                    value={citizenship}
                    onChange={handleCitizenshipChange}
                >
                    {countryList.map((country)=><MenuItem key={country.id} value={country.label}>{country.label}</MenuItem>) }
                    <MenuItem value={"Algeria"}>Algeria</MenuItem>
                    <MenuItem value={"Andorra"}>Andorra</MenuItem>
                    <MenuItem value={"Angola"}>Angola</MenuItem>
                    <MenuItem value={"Antigua and Barbuda"}>Antigua and Barbuda</MenuItem>
                    <MenuItem value={"Argentina"}>Argentina</MenuItem>
                    <MenuItem value={"Armenia"}>Armenia</MenuItem>
                    <MenuItem value={"Australia"}>Australia</MenuItem>
                    <MenuItem value={"Austria"}>Austria</MenuItem>
                    <MenuItem value={"Azerbaijan"}>Azerbaijan</MenuItem>
                    <MenuItem value={"Bahamas"}>Bahamas</MenuItem>
                    <MenuItem value={"Bahrain"}>Bahrain</MenuItem>
                    <MenuItem value={"Bangladesh"}>Bangladesh</MenuItem>
                    <MenuItem value={"Barbados"}>Barbados</MenuItem>
                    <MenuItem value={"Belarus"}>Belarus</MenuItem>
                    <MenuItem value={"Belgium"}>Belgium</MenuItem>
                    <MenuItem value={"Belize"}>Belize</MenuItem>
                    <MenuItem value={"Benin"}>Benin</MenuItem>
                    <MenuItem value={"Bhutan"}>Bhutan</MenuItem>
                    <MenuItem value={"Bolivia"}>Bolivia</MenuItem>
                    <MenuItem value={"Bosnia and Herzegovina"}>Bosnia and Herzegovina</MenuItem>
                    <MenuItem value={"Botswana"}>Botswana</MenuItem>
                    <MenuItem value={"Brazil"}>Brazil</MenuItem>
                    <MenuItem value={"Brunei"}>Brunei</MenuItem>
                    <MenuItem value={"Bulgaria"}>Bulgaria</MenuItem>
                    <MenuItem value={"Burkina Faso"}>Burkina Faso</MenuItem>
                    <MenuItem value={"Burundi"}>Burundi</MenuItem>
                    <MenuItem value={"Côte d'Ivoire"}>Côte d'Ivoire</MenuItem>
                    <MenuItem value={"Cabo Verde"}>Cabo Verde</MenuItem>
                    <MenuItem value={"Cambodia"}>Cambodia</MenuItem>
                    <MenuItem value={"Cameroon"}>Cameroon</MenuItem>
                    <MenuItem value={"Canada"}>Canada</MenuItem>
                    <MenuItem value={"Central African Republic"}>Central African Republic</MenuItem>
                    <MenuItem value={"Chad"}>Chad</MenuItem>
                    <MenuItem value={"Chile"}>Chile</MenuItem>
                    <MenuItem value={"China"}>China</MenuItem>
                    <MenuItem value={"Colombia"}>Colombia</MenuItem>
                    <MenuItem value={"Comoros"}>Comoros</MenuItem>
                    <MenuItem value={"Congo-Brazzaville"}>Congo</MenuItem>
                    <MenuItem value={"Costa Rica"}>Costa Rica</MenuItem>
                    <MenuItem value={"Croatia"}>Croatia</MenuItem>
                    <MenuItem value={"Cuba"}>Cuba</MenuItem>
                    <MenuItem value={"Cyprus"}>Cyprus</MenuItem>
                    <MenuItem value={"Czech Republic"}>Czech Republic</MenuItem>
                    <MenuItem value={"Democratic Republic of the Congo"}>Democratic Republic of the Congo</MenuItem>
                    <MenuItem value={"Denmark"}>Denmark</MenuItem>
                    <MenuItem value={"Djibouti"}>Djibouti</MenuItem>
                    <MenuItem value={"Dominica"}>Dominica</MenuItem>
                    <MenuItem value={"Dominican Republic"}>Dominican Republic</MenuItem>
                    <MenuItem value={"Ecuador"}>Ecuador</MenuItem>
                    <MenuItem value={"Egypt"}>Egypt</MenuItem>
                    <MenuItem value={"El Salvador"}>El Salvador</MenuItem>
                    <MenuItem value={"Equatorial Guinea"}>Equatorial Guinea</MenuItem>
                    <MenuItem value={"Eritrea"}>Eritrea</MenuItem>
                    <MenuItem value={"Estonia"}>Estonia</MenuItem>
                    <MenuItem value={"Eswatini"}>Eswatini</MenuItem>
                    <MenuItem value={"Ethiopia"}>Ethiopia</MenuItem>
                    <MenuItem value={"Fiji"}>Fiji</MenuItem>
                    <MenuItem value={"Finland"}>Finland</MenuItem>
                    <MenuItem value={"France"}>France</MenuItem>
                    <MenuItem value={"Gabon"}>Gabon</MenuItem>
                    <MenuItem value={"Gambia"}>Gambia</MenuItem>
                    <MenuItem value={"Georgia"}>Georgia</MenuItem>
                    <MenuItem value={"Germany"}>Germany</MenuItem>
                    <MenuItem value={"Ghana"}>Ghana</MenuItem>
                    <MenuItem value={"Greece"}>Greece</MenuItem>
                    <MenuItem value={"Grenada"}>Grenada</MenuItem>
                    <MenuItem value={"Guatemala"}>Guatemala</MenuItem>
                    <MenuItem value={"Guinea"}>Guinea</MenuItem>
                    <MenuItem value={"Guinea-Bissau"}>Guinea-Bissau</MenuItem>
                    <MenuItem value={"Guyana"}>Guyana</MenuItem>
                    <MenuItem value={"Haiti"}>Haiti</MenuItem>
                    <MenuItem value={"Holy See"}>Holy See</MenuItem>
                    <MenuItem value={"Honduras"}>Honduras</MenuItem>
                    <MenuItem value={"Hungary"}>Hungary</MenuItem>
                    <MenuItem value={"Iceland"}>Iceland</MenuItem>
                    <MenuItem value={"India"}>India</MenuItem>
                    <MenuItem value={"Indonesia"}>Indonesia</MenuItem>
                    <MenuItem value={"Iran"}>Iran</MenuItem>
                    <MenuItem value={"Iraq"}>Iraq</MenuItem>
                    <MenuItem value={"Ireland"}>Ireland</MenuItem>
                    <MenuItem value={"Israel"}>Israel</MenuItem>
                    <MenuItem value={"Italy"}>Italy</MenuItem>
                    <MenuItem value={"Jamaica"}>Jamaica</MenuItem>
                    <MenuItem value={"Japan"}>Japan</MenuItem>
                    <MenuItem value={"Jordan"}>Jordan</MenuItem>
                    <MenuItem value={"Kazakhstan"}>Kazakhstan</MenuItem>
                    <MenuItem value={"Kenya"}>Kenya</MenuItem>
                    <MenuItem value={"Kiribati"}>Kiribati</MenuItem>
                    <MenuItem value={"Kuwait"}>Kuwait</MenuItem>
                    <MenuItem value={"Kyrgyzstan"}>Kyrgyzstan</MenuItem>
                    <MenuItem value={"Laos"}>Laos</MenuItem>
                    <MenuItem value={"Latvia"}>Latvia</MenuItem>
                    <MenuItem value={"Lebanon"}>Lebanon</MenuItem>
                    <MenuItem value={"Lesotho"}>Lesotho</MenuItem>
                    <MenuItem value={"Liberia"}>Liberia</MenuItem>
                    <MenuItem value={"Libya"}>Libya</MenuItem>
                    <MenuItem value={"Liechtenstein"}>Liechtenstein</MenuItem>
                    <MenuItem value={"Lithuania"}>Lithuania</MenuItem>
                    <MenuItem value={"Luxembourg"}>Luxembourg</MenuItem>
                    <MenuItem value={"Madagascar"}>Madagascar</MenuItem>
                    <MenuItem value={"Malawi"}>Malawi</MenuItem>
                    <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                    <MenuItem value={"Maldives"}>Maldives</MenuItem>
                    <MenuItem value={"Mali"}>Mali</MenuItem>
                    <MenuItem value={"Malta"}>Malta</MenuItem>
                    <MenuItem value={"Marshall Islands"}>Marshall Islands</MenuItem>
                    <MenuItem value={"Mauritania"}>Mauritania</MenuItem>
                    <MenuItem value={"Mauritius"}>Mauritius</MenuItem>
                    <MenuItem value={"Mexico"}>Mexico</MenuItem>
                    <MenuItem value={"Micronesia"}>Micronesia</MenuItem>
                    <MenuItem value={"Moldova"}>Moldova</MenuItem>
                    <MenuItem value={"Monaco"}>Monaco</MenuItem>
                    <MenuItem value={"Mongolia"}>Mongolia</MenuItem>
                    <MenuItem value={"Montenegro"}>Montenegro</MenuItem>
                    <MenuItem value={"Morocco"}>Morocco</MenuItem>
                    <MenuItem value={"Mozambique"}>Mozambique</MenuItem>
                    <MenuItem value={"Myanmar"}>Myanmar</MenuItem>
                    <MenuItem value={"Namibia"}>Namibia</MenuItem>
                    <MenuItem value={"Nauru"}>Nauru</MenuItem>
                    <MenuItem value={"Nepal"}>Nepal</MenuItem>
                    <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
                    <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
                    <MenuItem value={"Nicaragua"}>Nicaragua</MenuItem>
                    <MenuItem value={"Niger"}>Niger</MenuItem>
                    <MenuItem value={"Nigeria"}>Nigeria</MenuItem>
                    <MenuItem value={"North Korea"}>North Korea</MenuItem>
                    <MenuItem value={"North Macedonia"}>North Macedonia</MenuItem>
                    <MenuItem value={"Norway"}>Norway</MenuItem>
                    <MenuItem value={"Oman"}>Oman</MenuItem>
                    <MenuItem value={"Pakistan"}>Pakistan</MenuItem>
                    <MenuItem value={"Palau"}>Palau</MenuItem>
                    <MenuItem value={"Palestine"}>Palestine</MenuItem>
                    <MenuItem value={"Panama"}>Panama</MenuItem>
                    <MenuItem value={"Papua New Guinea"}>Papua New Guinea</MenuItem>
                    <MenuItem value={"Paraguay"}>Paraguay</MenuItem>
                    <MenuItem value={"Peru"}>Peru</MenuItem>
                    <MenuItem value={"Philippines"}>Philippines</MenuItem>
                    <MenuItem value={"Poland"}>Poland</MenuItem>
                    <MenuItem value={"Portugal"}>Portugal</MenuItem>
                    <MenuItem value={"Qatar"}>Qatar</MenuItem>
                    <MenuItem value={"Romania"}>Romania</MenuItem>
                    <MenuItem value={"Russia"}>Russia</MenuItem>
                    <MenuItem value={"Rwanda"}>Rwanda</MenuItem>
                    <MenuItem value={"Saint Kitts and Nevis"}>Saint Kitts and Nevis</MenuItem>
                    <MenuItem value={"Saint Lucia"}>Saint Lucia</MenuItem>
                    <MenuItem value={"Saint Vincent and the Grenadines"}>Saint Vincent and the Grenadines</MenuItem>
                    <MenuItem value={"Samoa"}>Samoa</MenuItem>
                    <MenuItem value={"San Marino"}>San Marino</MenuItem>
                    <MenuItem value={"Sao Tome and Principe"}>Sao Tome and Principe</MenuItem>
                    <MenuItem value={"Saudi Arabia"}>Saudi Arabia</MenuItem>
                    <MenuItem value={"Senegal"}>Senegal</MenuItem>
                    <MenuItem value={"Serbia"}>Serbia</MenuItem>
                    <MenuItem value={"Seychelles"}>Seychelles</MenuItem>
                    <MenuItem value={"Sierra Leone"}>Sierra Leone</MenuItem>
                    <MenuItem value={"Singapore"}>Singapore</MenuItem>
                    <MenuItem value={"Slovakia"}>Slovakia</MenuItem>
                    <MenuItem value={"Slovenia"}>Slovenia</MenuItem>
                    <MenuItem value={"Solomon Islands"}>Solomon Islands</MenuItem>
                    <MenuItem value={"Somalia"}>Somalia</MenuItem>
                    <MenuItem value={"South Africa"}>South Africa</MenuItem>
                    <MenuItem value={"South Korea"}>South Korea</MenuItem>
                    <MenuItem value={"South Sudan"}>South Sudan</MenuItem>
                    <MenuItem value={"Spain"}>Spain</MenuItem>
                    <MenuItem value={"Sri Lanka"}>Sri Lanka</MenuItem>
                    <MenuItem value={"Sudan"}>Sudan</MenuItem>
                    <MenuItem value={"Suriname"}>Suriname</MenuItem>
                    <MenuItem value={"Sweden"}>Sweden</MenuItem>
                    <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
                    <MenuItem value={"Syria"}>Syria</MenuItem>
                    <MenuItem value={"Tajikistan"}>Tajikistan</MenuItem>
                    <MenuItem value={"Tanzania"}>Tanzania</MenuItem>
                    <MenuItem value={"Thailand"}>Thailand</MenuItem>
                    <MenuItem value={"Timor-Leste"}>Timor-Leste</MenuItem>
                    <MenuItem value={"Togo"}>Togo</MenuItem>
                    <MenuItem value={"Tonga"}>Tonga</MenuItem>
                    <MenuItem value={"Trinidad and Tobago"}>Trinidad and Tobago</MenuItem>
                    <MenuItem value={"Tunisia"}>Tunisia</MenuItem>
                    <MenuItem value={"Turkey"}>Turkey</MenuItem>
                    <MenuItem value={"Turkmenistan"}>Turkmenistan</MenuItem>
                    <MenuItem value={"Tuvalu"}>Tuvalu</MenuItem>
                    <MenuItem value={"Uganda"}>Uganda</MenuItem>
                    <MenuItem value={"Ukraine"}>Ukraine</MenuItem>
                    <MenuItem value={"United Arab Emirates"}>United Arab Emirates</MenuItem>
                    <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
                    <MenuItem value={"United States of America"}>United States of America</MenuItem>
                    <MenuItem value={"Uruguay"}>Uruguay</MenuItem>
                    <MenuItem value={"Uzbekistan"}>Uzbekistan</MenuItem>
                    <MenuItem value={"Vanuatu"}>Vanuatu</MenuItem>
                    <MenuItem value={"Venezuela"}>Venezuela</MenuItem>
                    <MenuItem value={"Vietnam"}>Vietnam</MenuItem>
                    <MenuItem value={"Yemen"}>Yemen</MenuItem>
                    <MenuItem value={"Zambia"}>Zambia</MenuItem>
                    <MenuItem value={"Zimbabwe"}>Zimbabwe</MenuItem>
                </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
                <InputLabel id="destination">Destination</InputLabel>
                <Select
                    labelId="destination"
                    id="destination"
                    value={id}
                    onChange={handleIdChange}
                >
                    {countryList.map((country)=><MenuItem key={country.id} value={country.id}>{country.label}</MenuItem>) }
                    <MenuItem value={"3"}>Algeria</MenuItem>
                    <MenuItem value={"4"}>Andorra</MenuItem>
                    <MenuItem value={"5"}>Angola</MenuItem>
                    <MenuItem value={"6"}>Antigua and Barbuda</MenuItem>
                    <MenuItem value={"7"}>Argentina</MenuItem>
                    <MenuItem value={"8"}>Armenia</MenuItem>
                    <MenuItem value={"9"}>Australia</MenuItem>
                    <MenuItem value={"10"}>Austria</MenuItem>
                    <MenuItem value={"11"}>Azerbaijan</MenuItem>
                    <MenuItem value={"12"}>Bahamas</MenuItem>
                    <MenuItem value={"13"}>Bahrain</MenuItem>
                    <MenuItem value={"14"}>Bangladesh</MenuItem>
                    <MenuItem value={"15"}>Barbados</MenuItem>
                    <MenuItem value={"16"}>Belarus</MenuItem>
                    <MenuItem value={"17"}>Belgium</MenuItem>
                    <MenuItem value={"18"}>Belize</MenuItem>
                    <MenuItem value={"19"}>Benin</MenuItem>
                    <MenuItem value={"20"}>Bhutan</MenuItem>
                    <MenuItem value={"21"}>Bolivia</MenuItem>
                    <MenuItem value={"22"}>Bosnia and Herzegovina</MenuItem>
                    <MenuItem value={"23"}>Botswana</MenuItem>
                    <MenuItem value={"24"}>Brazil</MenuItem>
                    <MenuItem value={"25"}>Brunei</MenuItem>
                    <MenuItem value={"26"}>Bulgaria</MenuItem>
                    <MenuItem value={"27"}>Burkina Faso</MenuItem>
                    <MenuItem value={"28"}>Burundi</MenuItem>
                    <MenuItem value={"29"}>Côte d'Ivoire</MenuItem>
                    <MenuItem value={"30"}>Cabo Verde</MenuItem>
                    <MenuItem value={"31"}>Cambodia</MenuItem>
                    <MenuItem value={"32"}>Cameroon</MenuItem>
                    <MenuItem value={"33"}>Canada</MenuItem>
                    <MenuItem value={"34"}>Central African Republic</MenuItem>
                    <MenuItem value={"35"}>Chad</MenuItem>
                    <MenuItem value={"36"}>Chile</MenuItem>
                    <MenuItem value={"37"}>China</MenuItem>
                    <MenuItem value={"38"}>Colombia</MenuItem>
                    <MenuItem value={"39"}>Comoros</MenuItem>
                    <MenuItem value={"40"}>Congo</MenuItem>
                    <MenuItem value={"41"}>Costa Rica</MenuItem>
                    <MenuItem value={"42"}>Croatia</MenuItem>
                    <MenuItem value={"43"}>Cuba</MenuItem>
                    <MenuItem value={"44"}>Cyprus</MenuItem>
                    <MenuItem value={"45"}>Czech Republic</MenuItem>
                    <MenuItem value={"46"}>Democratic Republic of the Congo</MenuItem>
                    <MenuItem value={"47"}>Denmark</MenuItem>
                    <MenuItem value={"48"}>Djibouti</MenuItem>
                    <MenuItem value={"49"}>Dominica</MenuItem>
                    <MenuItem value={"50"}>Dominican Republic</MenuItem>
                    <MenuItem value={"51"}>Ecuador</MenuItem>
                    <MenuItem value={"52"}>Egypt</MenuItem>
                    <MenuItem value={"53"}>El Salvador</MenuItem>
                    <MenuItem value={"54"}>Equatorial Guinea</MenuItem>
                    <MenuItem value={"55"}>Eritrea</MenuItem>
                    <MenuItem value={"56"}>Estonia</MenuItem>
                    <MenuItem value={"57"}>Eswatini</MenuItem>
                    <MenuItem value={"58"}>Ethiopia</MenuItem>
                    <MenuItem value={"59"}>Fiji</MenuItem>
                    <MenuItem value={"60"}>Finland</MenuItem>
                    <MenuItem value={"61"}>France</MenuItem>
                    <MenuItem value={"62"}>Gabon</MenuItem>
                    <MenuItem value={"63"}>Gambia</MenuItem>
                    <MenuItem value={"64"}>Georgia</MenuItem>
                    <MenuItem value={"65"}>Germany</MenuItem>
                    <MenuItem value={"66"}>Ghana</MenuItem>
                    <MenuItem value={"67"}>Greece</MenuItem>
                    <MenuItem value={"68"}>Grenada</MenuItem>
                    <MenuItem value={"69"}>Guatemala</MenuItem>
                    <MenuItem value={"70"}>Guinea</MenuItem>
                    <MenuItem value={"71"}>Guinea-Bissau</MenuItem>
                    <MenuItem value={"72"}>Guyana</MenuItem>
                    <MenuItem value={"73"}>Haiti</MenuItem>
                    <MenuItem value={"74"}>Holy See</MenuItem>
                    <MenuItem value={"75"}>Honduras</MenuItem>
                    <MenuItem value={"76"}>Hungary</MenuItem>
                    <MenuItem value={"77"}>Iceland</MenuItem>
                    <MenuItem value={"78"}>India</MenuItem>
                    <MenuItem value={"79"}>Indonesia</MenuItem>
                    <MenuItem value={"80"}>Iran</MenuItem>
                    <MenuItem value={"81"}>Iraq</MenuItem>
                    <MenuItem value={"82"}>Ireland</MenuItem>
                    <MenuItem value={"83"}>Israel</MenuItem>
                    <MenuItem value={"84"}>Italy</MenuItem>
                    <MenuItem value={"85"}>Jamaica</MenuItem>
                    <MenuItem value={"86"}>Japan</MenuItem>
                    <MenuItem value={"87"}>Jordan</MenuItem>
                    <MenuItem value={"88"}>Kazakhstan</MenuItem>
                    <MenuItem value={"89"}>Kenya</MenuItem>
                    <MenuItem value={"90"}>Kiribati</MenuItem>
                    <MenuItem value={"91"}>Kuwait</MenuItem>
                    <MenuItem value={"92"}>Kyrgyzstan</MenuItem>
                    <MenuItem value={"93"}>Laos</MenuItem>
                    <MenuItem value={"94"}>Latvia</MenuItem>
                    <MenuItem value={"95"}>Lebanon</MenuItem>
                    <MenuItem value={"96"}>Lesotho</MenuItem>
                    <MenuItem value={"97"}>Liberia</MenuItem>
                    <MenuItem value={"98"}>Libya</MenuItem>
                    <MenuItem value={"99"}>Liechtenstein</MenuItem>
                    <MenuItem value={"100"}>Lithuania</MenuItem>
                    <MenuItem value={"101"}>Luxembourg</MenuItem>
                    <MenuItem value={"102"}>Madagascar</MenuItem>
                    <MenuItem value={"103"}>Malawi</MenuItem>
                    <MenuItem value={"104"}>Malaysia</MenuItem>
                    <MenuItem value={"105"}>Maldives</MenuItem>
                    <MenuItem value={"106"}>Mali</MenuItem>
                    <MenuItem value={"107"}>Malta</MenuItem>
                    <MenuItem value={"108"}>Marshall Islands</MenuItem>
                    <MenuItem value={"109"}>Mauritania</MenuItem>
                    <MenuItem value={"110"}>Mauritius</MenuItem>
                    <MenuItem value={"111"}>Mexico</MenuItem>
                    <MenuItem value={"112"}>Micronesia</MenuItem>
                    <MenuItem value={"113"}>Moldova</MenuItem>
                    <MenuItem value={"114"}>Monaco</MenuItem>
                    <MenuItem value={"115"}>Mongolia</MenuItem>
                    <MenuItem value={"116"}>Montenegro</MenuItem>
                    <MenuItem value={"117"}>Morocco</MenuItem>
                    <MenuItem value={"118"}>Mozambique</MenuItem>
                    <MenuItem value={"119"}>Myanmar</MenuItem>
                    <MenuItem value={"120"}>Namibia</MenuItem>
                    <MenuItem value={"121"}>Nauru</MenuItem>
                    <MenuItem value={"122"}>Nepal</MenuItem>
                    <MenuItem value={"123"}>Netherlands</MenuItem>
                    <MenuItem value={"124"}>New Zealand</MenuItem>
                    <MenuItem value={"125"}>Nicaragua</MenuItem>
                    <MenuItem value={"126"}>Niger</MenuItem>
                    <MenuItem value={"127"}>Nigeria</MenuItem>
                    <MenuItem value={"128"}>North Korea</MenuItem>
                    <MenuItem value={"129"}>North Macedonia</MenuItem>
                    <MenuItem value={"130"}>Norway</MenuItem>
                    <MenuItem value={"131"}>Oman</MenuItem>
                    <MenuItem value={"132"}>Pakistan</MenuItem>
                    <MenuItem value={"133"}>Palau</MenuItem>
                    <MenuItem value={"134"}>Palestine</MenuItem>
                    <MenuItem value={"135"}>Panama</MenuItem>
                    <MenuItem value={"136"}>Papua New Guinea</MenuItem>
                    <MenuItem value={"137"}>Paraguay</MenuItem>
                    <MenuItem value={"138"}>Peru</MenuItem>
                    <MenuItem value={"139"}>Philippines</MenuItem>
                    <MenuItem value={"140"}>Poland</MenuItem>
                    <MenuItem value={"141"}>Portugal</MenuItem>
                    <MenuItem value={"142"}>Qatar</MenuItem>
                    <MenuItem value={"143"}>Romania</MenuItem>
                    <MenuItem value={"144"}>Russia</MenuItem>
                    <MenuItem value={"145"}>Rwanda</MenuItem>
                    <MenuItem value={"146"}>Saint Kitts and Nevis</MenuItem>
                    <MenuItem value={"147"}>Saint Lucia</MenuItem>
                    <MenuItem value={"148"}>Saint Vincent and the Grenadines</MenuItem>
                    <MenuItem value={"149"}>Samoa</MenuItem>
                    <MenuItem value={"150"}>San Marino</MenuItem>
                    <MenuItem value={"151"}>Sao Tome and Principe</MenuItem>
                    <MenuItem value={"152"}>Saudi Arabia</MenuItem>
                    <MenuItem value={"153"}>Senegal</MenuItem>
                    <MenuItem value={"154"}>Serbia</MenuItem>
                    <MenuItem value={"155"}>Seychelles</MenuItem>
                    <MenuItem value={"156"}>Sierra Leone</MenuItem>
                    <MenuItem value={"157"}>Singapore</MenuItem>
                    <MenuItem value={"158"}>Slovakia</MenuItem>
                    <MenuItem value={"159"}>Slovenia</MenuItem>
                    <MenuItem value={"160"}>Solomon Islands</MenuItem>
                    <MenuItem value={"161"}>Somalia</MenuItem>
                    <MenuItem value={"162"}>South Africa</MenuItem>
                    <MenuItem value={"163"}>South Korea</MenuItem>
                    <MenuItem value={"164"}>South Sudan</MenuItem>
                    <MenuItem value={"165"}>Spain</MenuItem>
                    <MenuItem value={"166"}>Sri Lanka</MenuItem>
                    <MenuItem value={"167"}>Sudan</MenuItem>
                    <MenuItem value={"168"}>Suriname</MenuItem>
                    <MenuItem value={"169"}>Sweden</MenuItem>
                    <MenuItem value={"170"}>Switzerland</MenuItem>
                    <MenuItem value={"171"}>Syria</MenuItem>
                    <MenuItem value={"172"}>Tajikistan</MenuItem>
                    <MenuItem value={"173"}>Tanzania</MenuItem>
                    <MenuItem value={"174"}>Thailand</MenuItem>
                    <MenuItem value={"175"}>Timor-Leste</MenuItem>
                    <MenuItem value={"176"}>Togo</MenuItem>
                    <MenuItem value={"177"}>Tonga</MenuItem>
                    <MenuItem value={"178"}>Trinidad and Tobago</MenuItem>
                    <MenuItem value={"179"}>Tunisia</MenuItem>
                    <MenuItem value={"180"}>Turkey</MenuItem>
                    <MenuItem value={"181"}>Turkmenistan</MenuItem>
                    <MenuItem value={"182"}>Tuvalu</MenuItem>
                    <MenuItem value={"183"}>Uganda</MenuItem>
                    <MenuItem value={"184"}>Ukraine</MenuItem>
                    <MenuItem value={"185"}>United Arab Emirates</MenuItem>
                    <MenuItem value={"186"}>United Kingdom</MenuItem>
                    <MenuItem value={"187"}>United States of America</MenuItem>
                    <MenuItem value={"188"}>Uruguay</MenuItem>
                    <MenuItem value={"189"}>Uzbekistan</MenuItem>
                    <MenuItem value={"190"}>Vanuatu</MenuItem>
                    <MenuItem value={"191"}>Venezuela</MenuItem>
                    <MenuItem value={"192"}>Vietnam</MenuItem>
                    <MenuItem value={"193"}>Yemen</MenuItem>
                    <MenuItem value={"194"}>Zambia</MenuItem>
                    <MenuItem value={"195"}>Zimbabwe</MenuItem>
                </Select>
            </FormControl>
            <Button
                disabled={id.length < 1}
                onClick={handleSubmit}
                color="primary"
                className={classes.searchButton}
            >
                Search
            </Button>
            </Box>
        </form>
        </Card>

    )
}

