import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const HikeCalculator = () => {
    const [obj, setObj] = useState({
        "old_salery": 0,
        "hike_percent": 0,
        "deduction": 0,
    });

    const [result, setResult] = useState({});
    const [hide, setHide] = useState(false)
    
    const calculate = (e) => {
        e.preventDefault();

        let oldSalaryMonthly = obj['old_salery'] / 12;
        let newSalary = obj['old_salery'] * (1 + obj['hike_percent'] / 100);
        let newSalaryMonthly = newSalary / 12;
        let oldTakeHome = oldSalaryMonthly - obj['deduction'];
        let newTakeHome = newSalaryMonthly - obj['deduction'];
        let differenceMonthly = newTakeHome - oldTakeHome;
        let differenceYearly = differenceMonthly * 12;
        
        setResult({
            "oldSalary": obj['old_salery'],
            "oldSalaryMonthly": oldSalaryMonthly,
            "oldTakeHome": oldTakeHome,

            "newSalary": newSalary,
            "newTakeHome": newTakeHome,
            "newSalaryMonthly": newSalaryMonthly,

            "differenceMonthly": differenceMonthly,
            "differenceYearly": differenceYearly,
        });

        setHide(true)
    };

    function formatToIndianStyle(num) {
        const roundedNum = num.toFixed(2);
        const [integerPart, decimalPart] = roundedNum.split('.');
        const lastThreeDigits = integerPart.slice(-3);
        const otherDigits = integerPart.slice(0, -3);
        const formattedInteger = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (otherDigits ? "," : "") + lastThreeDigits;
        return `${formattedInteger}.${decimalPart}`;
    }

    const stateUpdate = (key, event) => {
        setObj({ ...obj, [key]: event.target.value === '' ? 0 : parseFloat(event.target.value) });
    };
    
    return (
        <div className="row justify-content-around align-items-center my-4">

            <div className="bg-trans col-12 col-md-5 p-4 rounded shadow-lg w-50 my-3">
                <h2 className="text-center mb-4">Hike Calculator</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="old_salery" className="form-label">Old Salary</label>
                        <input type="number" id="old_salery" name="old_salery" className="form-control" placeholder="Enter your old salary" 
                        onChange={(e) => stateUpdate('old_salery', e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="hike_percent" className="form-label">Hike %</label>
                        <input type="number" id="hike_percent" name="hike_percent" className="form-control" placeholder="Enter your hike percent" 
                        onChange={(e) => stateUpdate('hike_percent', e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="deduction" className="form-label">Deduction</label>
                        <input type="number" id="deduction" name="deduction" className="form-control" placeholder="Enter your deduction" 
                        onChange={(e) => stateUpdate('deduction', e)} />
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={(e) => calculate(e)}>Calculate</button>
                </form>
            </div>

            <div className="bg-trans col-12 col-md-5 p-4 rounded shadow-lg w-50 my-3" style={{display: !hide ? 'none' : 'block'}}>
                <h2 className="text-center mb-4">Results</h2>
                <table className='table table-striped table-bordered table-hover text-white'>
                    <thead className='radial-bg font-weight-bold'>
                        <tr>
                            <td>Heading</td>
                            <td>Value</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(result).map(([key, value], index) => {
                                return (
                                    <tr key={index}>
                                        <td className="font-weight-bold text-capitalize">{key}:</td> 
                                        <td>{formatToIndianStyle(value)}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default HikeCalculator;
