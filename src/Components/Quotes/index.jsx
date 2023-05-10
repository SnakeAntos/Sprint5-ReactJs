import "./index.css";
import IndividualQuotes from './IndividualQuotes.jsx';

const Quotes = (props) => {
  return (
    <>
    <div className="quotes-container">
        
        <div className="quotes-components-container">
            <div className="quotes-img-quotes"></div>
            <IndividualQuotes
            imgClass='imgQuotesClass1'
            text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.'
            name='Satish Patel'
            position='Founder & CEO, Hunddle'
            ></IndividualQuotes>
            <IndividualQuotes
            imgClass='imgQuotesClass2'
            text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.'
            name='Bruce McKenzie'
            position='Founder & CEO, Hunddle'
            ></IndividualQuotes>
            <IndividualQuotes
            imgClass='imgQuotesClass3'
            text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled
            collaboration machine.'
            name='Iva BOY'
            position='Founder & CEO, Hunddle'
            ></IndividualQuotes>             
        </div>
    </div>      
    </>
  );
};

export default Quotes;
