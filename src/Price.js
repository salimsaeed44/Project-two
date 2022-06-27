import React from 'react';
import ReactLogo from './bg-top.svg';
// import ReactLogo from './bg-bottom.svg';
import "./Price.css";
const Price = () => {
    return (
<div className='container'>
    <div className='backgr-img'>
<svg xmlns="http://www.w3.org/2000/svg" width="375" height="658"><g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2"><path d="M172.71-101C70.623-79.38 17.478-39.688 13.273 18.074c-6.307 86.643 231.598 17.186 136.358 198-95.241 180.813-181.318 185.29-136.358 298C58.233 626.784 178.96 685.954 319.21 641.2c93.501-29.836 144.652-140.545 153.453-332.126"/><path d="M214.7-101C134.617-82.012 92.926-47.154 89.628 3.575c-4.948 76.093 181.679 15.094 106.966 173.89C121.882 336.262 54.36 340.192 89.628 439.18c35.269 98.986 129.974 150.95 239.995 111.646C402.97 524.622 443.096 427.395 450 259.141"/><path d="M250.935-103c-60.604 16.56-92.153 46.963-94.65 91.208-3.743 66.367 137.488 13.165 80.949 151.664-56.54 138.5-107.638 141.927-80.948 228.261 26.69 86.335 98.359 131.656 181.618 97.376C393.41 442.655 423.775 357.855 429 211.108"/></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" width="353" height="304"><g fill="none" fill-rule="evenodd" stroke="#D0D5F6" stroke-width="2"><path d="M180.29 759c102.087-21.62 155.232-61.312 159.437-119.074 6.307-86.643-231.598-17.186-136.358-198 95.241-180.813 181.318-185.29 136.358-298C294.767 31.216 174.04-27.954 33.79 16.8c-93.501 29.836-144.652 140.545-153.453 332.126"/><path d="M138.3 759c80.083-18.988 121.774-53.846 125.072-104.575 4.948-76.093-181.679-15.094-106.966-173.89C231.118 321.738 298.64 317.808 263.372 218.82c-35.269-98.986-129.974-150.95-239.995-111.646C-49.97 133.378-90.096 230.605-97 398.859"/><path d="M102.065 761c60.604-16.56 92.153-46.963 94.65-91.208 3.743-66.367-137.488-13.165-80.949-151.664 56.54-138.5 107.638-141.927 80.948-228.261-26.69-86.335-98.359-131.656-181.618-97.376C-40.41 215.345-70.775 300.145-76 446.892"/></g></svg>

    </div>
<div className='header-title'>
    <h2>Our Pricing</h2>
</div>

<div className='switch'>
    {/* <label>
        <input type={"checkbox"} />
        <span className='check'></span>
    </label> */}
    {/* <div className='switch-container'>
        <div className='checked'>
            <div className='ball'></div>
        </div>
    </div> */}
    <label class="switch">

<input type="checkbox"/>
 <div class="slider">
<span>Annually</span>
<span>Monthly</span>
</div>
</label>

</div>
<div className='box-prices'>
    <div className='box basic'>
        <h4>Basic</h4>
        <h2>19.99</h2>
        <ul>
            <li>500 GB Storage</li>
            <li>2 Users Allowed</li>
            <li>Send up to 3 GB</li>
        </ul>
        <button>LEARN MORE</button>
    </div>
    <div className='box pro'>
        <h4>Professional</h4>
        <h2>24.99</h2>
        <ul>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
        </ul>
        <button>LEARN MORE</button>
    </div>
    <div className='box master'>
        <h4>Master</h4>
        <h2>39.99</h2>
        <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
        </ul>
        <button>LEARN MORE</button>
    </div>
</div>
</div>
    
    
)
}

export default Price;

