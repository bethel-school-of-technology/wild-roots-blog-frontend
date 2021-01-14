import React from 'react';
import '../assets/LocalBusiness.css';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function LocalBusiness() {
    return (
        <div className="localBusiness">
            <h1>Shop Local</h1>
            <p className="local">When you shop local you're investing in our community, right here in Williston, North Dakota.</p>
            <Shop />
        </div>
    )
};

const Shop = props => {
    const store = {
        name: 'Handy Andys Nursery',
        address: '515 W Front Street',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://handyandysnursery.com/'
    };
    const store2 = {
        name: 'Country Floral Gifts and Greenhouse',
        address: '111 2nd Avenue West',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'http://countryfloralgreenhouse.com/'
    };
    <hr />
    const store3 = {
        name: 'Williston Home and Lumber',
        address: '320 26th St E',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://williston.doitbest.com/'
    };
    const store4 = {
        name: 'Builders FirstSource',
        address: '401 26th St E',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://www.bfsbuilt.com/williston-nd'
    };
    <hr />
    const store5 = {
        name: 'Myers Munitions',
        address: '1915 2nd Ave West',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://www.facebook.com/myersmunitions/'
    };
    const store6 = {
        name: 'Cooks on Main',
        address: '224 Main Street',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://cooksonmain.com/'
    };
    <hr />
    const store7 = {
        name:'Meg-a-Latte',
        address: '1810 2nd Avenue West',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url:'https://meg-a-latte.com/'
    };
    const store8 = {
        name: 'El Rancho Hotel',
        address: '1623 2nd Ave West',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://www.elranchowilliston.com/Restaurant-Bar'
    };
    <hr />
    const store9 = {
        name: 'Books on Broadway',
        address: '12 1/2 West Broadway',
        city: 'Williston',
        state: 'North Dakota',
        zip: '58801',
        url: 'https://booksonbroadwaywilliston.com/'    }
    return (
        <div className="store">
            <Store store={store} />
            <Store store={store2} />
            <Store store={store3} />
            <Store store={store4} />
            <Store store={store5} />
            <Store store={store6} />
            <Store store={store7} />
            <Store store={store8} />
            <Store store={store9} />
        </div>
    )
};

const Store = props => {
    return (
    <div>
        <ul>
            <li> {props.store.name} </li>
            <li> {props.store.address} </li>
            <li> {props.store.city}, {props.store.state}, {props.store.zip} </li>
            <a href= {props.store.url} target="_blank">   <button className="two"> Check Us Out </button> </a>
        </ul>   
    </div>
)};


// Store.propTypes = {
//     store: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         address: PropTypes.string.isRequired,
//         city: PropTypes.string.isRequired,
//         state: PropTypes.string.isRequired,
//         zip: PropTypes.number.isRequired,
// }),
// };
export default LocalBusiness
