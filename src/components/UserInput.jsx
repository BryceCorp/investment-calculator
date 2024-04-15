import { useInputContext } from './UserInputProvider';

export default function UserInpt() {
     const { handleInputChange } = useInputContext();


    
    return (
        <section id='user-input'>
            <div className="input-group">
                <p>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="text" name="initialInvestment" onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="text" name="annualInvestment" onChange={handleInputChange} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expectedReturn">Expected Return (%)</label>
                    <input type="text" name="expectedReturn" onChange={handleInputChange} />
                </p>
                <p>
                    <label htmlFor="duration">Duration</label>
                    <input type="text" name="duration" onChange={handleInputChange} />
                </p>
            </div>
        </section>
    );
}