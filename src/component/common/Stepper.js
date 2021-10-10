export default function Stepper() {
    return (
        <div className="bs-stepper">
            <div className="bs-stepper-header" role="tablist">
                {/* <!-- your steps here --> */}
                <div className="step active" data-target="#logins-part">
                    <button type="button" className="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                        <span className="bs-stepper-circle-new active"><span className="active"></span></span>
                    </button>
                    <br/>
                    <span className="bs-stepper-label">Shopping</span>
                </div>
                <div className="line active"></div>
                <div className="step" data-target="#information-part">
                    <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                        <span className="bs-stepper-circle-new"><span></span></span>
                    </button>
                    <br/>
                    <span className="bs-stepper-label">ORDER details</span>
                </div>
                <div className="line"></div>
                <div className="step" data-target="#information-part">
                    <button type="button" className="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                        <span className="bs-stepper-circle-new"><span></span></span>
                    </button>
                    <br/>
                    <span className="bs-stepper-label">MAKE Payment</span>
                </div>
            </div>
            <div className="bs-stepper-content">
                {/* <!-- your steps content here --> */}
                <div id="logins-part" className="content" role="tabpanel" aria-labelledby="logins-part-trigger"></div>
                <div id="information-part" className="content" role="tabpanel" aria-labelledby="information-part-trigger"></div>
            </div>
        </div>
    )
}