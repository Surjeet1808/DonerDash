import { FAQ } from "../component/FAQ";
function Help(){
    
    const faqs = [
        {
            que: "What is Doner Desh?",
            ans: "Doner Desh is a donation platform focused on supporting underprivileged children's education by connecting donors with children in need."
        },
        {
            que: "How can I donate through Doner Desh?",
            ans: "You can donate by selecting a cause, entering your details, and securely processing the payment via our integrated payment gateway."
        },
        {
            que: "Can I track my donations?",
            ans: "Yes, Doner Desh allows you to track all your donations and view the impact of your contributions in real time."
        },
        {
            que: "Is there a referral program?",
            ans: "Yes, we offer a referral option where you can invite others to donate and earn rewards for helping spread the word."
        },
        {
            que: "Are my donations tax-deductible?",
            ans: "Yes, donations made through Doner Desh are eligible for tax deductions as per local tax regulations."
        },
        {
            que: "How does Doner Desh ensure transparency?",
            ans: "We provide transaction tracking and regular updates on how your donations are being used to support children's education."
        }
    ];
    
    return<>
        <div className="flex justify-center w-[100%] h-[90vh] mb-5 ">
            <div className="w-[50%] bg-white rounded-lg h-[100%] flex flex-col gap-5 p-8 overflow-auto">
            {/* <div className="flex flex-col justify-center items-center gap-5 h-[100%] p-8"> */}
            <h1 className="font-bold text-lg text-center">Frequently Asked Questions</h1>
            <p className="font-bold text-lg text-center p-3" >Do you need some help with something or do you have questions on some features</p>
            {faqs.map((faq)=>{
                return(
                <>

                <hr />
                <FAQ que={faq.que} ans={faq.ans} />
                </>
            )
            })}
            {/* </div> */}
            <div className="flex flex-col justfy-center items-center gap-4 border-2 rounded-lg mt-5 p-4 font-bold">
                <h2>Have you any other questions or queries</h2>
                <p>do not hesitate to contact us with any queries</p>
                <form className="flex flex-col gap-5 justify-center items-center mb-5" action="">
                    <input className="px-4 py-2 rounded w-[20rem] border-2 border-zinc-500" type="text" placeholder="Enter your Query" />
                    <button className="p-2 text-white w-[5rem] font-semibold bg-zinc-900 rounded">SUBMIT</button>
                </form>
            </div>
            </div>
        </div>
    </>
}
export default Help;