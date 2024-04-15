import { useInputContext } from './UserInputProvider.jsx'; 
import { calculateInvestmentResults, formatter } from '../util/investment.js' 

export default function ResultsTable() {
    const { inputs } = useInputContext();
    const { initialInvestment, annualInvestment, expectedReturn, duration } = inputs;

    // Convert string inputs to numbers as necessary
    const investmentData = calculateInvestmentResults({
        initialInvestment: Number(initialInvestment),
        annualInvestment: Number(annualInvestment),
        expectedReturn: Number(expectedReturn),
        duration: parseInt(duration, 10),
    });

    return (
        <section id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Invested Capital (PA)</th>
                    </tr>
                </thead>
                <tbody>
                    {investmentData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.interest * item.year)} </td>
                            <td>{formatter.format(item.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}