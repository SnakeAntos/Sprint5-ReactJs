import "./index.css";
import Feature from './Features'

const FeaturesCont = () => {
  
  return (
    <>
      <div className="featuresCont-container">
        <div className="featuresCont-division">
            <Feature 
            imgClass='imgClass1'
            text='Access your files, anywhere'
            paragraph ='The hability to use a smartphone, tablet, or computer
            to access your account means your files follow you everywhere'
             ></Feature>
             <Feature 
            imgClass='imgClass2'
            text='Security you can trust'
            paragraph ='2-factor authentication and user-controlled enryption are
            just a couple of the security features we allow to help secure your files'
             ></Feature>
        </div>
        <div className="featuresCont-division">
            <Feature 
            imgClass='imgClass3'
            text='Real-time collaboration'
            paragraph ='Securely share files and folders with friends, family and colleagues for live
            collaboration. No email attachments required.'
             ></Feature>
             <Feature 
            imgClass='imgClass4'
            text='Store any type of file'
            paragraph ='Whether you`re sharing holidays photos or work documents Fylo has you covered 
            allowing for all file types to be securely stored and shared.'
             ></Feature>
        </div>
      </div>
    </>
  );
};

export default FeaturesCont;
