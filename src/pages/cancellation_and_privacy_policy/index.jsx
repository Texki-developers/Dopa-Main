import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'

export default function index() {
    const [isMounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])
    return (
        <>
            {
                isMounted &&
                <div suppressHydrationWarning={true}>
                    <div className="main-div">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center mt-5 mb-2">
                                    <h2 className="fw-600">CANCELLATION & REFUND POLICY</h2>
                                </div>
                            </div>
                            <div className="row mt-4 mb-5">
                                <div className="col-lg-12">
                                    <p>We make all our best endeavours to provide you with a pleasant experience. In the unlikely
                                        event that you face any issues, please contact us at:</p>

                                    <div>
                                        <ul>
                                            <li>
                                                Application for refund has to be submitted in the office in prescribed form.
                                            </li>
                                            <li>
                                                No refund will be made for the amount remitted towards REGISTRATION (Registration Fee + Service Tax).
                                            </li>
                                            <li>
                                                Refund of the course fee will be made subject to following conditions:
                                                <ul className="pl-0">
                                                    <ol start="1">
                                                        <li>
                                                            Application for refund will be considered only if the entire course fee has been remitted.
                                                        </li>
                                                        <li>
                                                            Refund will be calculated based on the date on which proper application is submitted.
                                                            No. Of classNamees attended will not be taken into consideration while determining the amount of refund.
                                                        </li>
                                                        <li>
                                                            Informing over the phone, email or in person regarding the discontinuing the course is not the claim
                                                            For the refund. Refund calculation is done only on the basis of the receipt of the refund application in -
                                                            our office. The maximum amount of refund is calculated as per the respective courses, which is mentioned in
                                                            the course brochures.
                                                        </li>
                                                    </ol>
                                                </ul>
                                            </li>
                                            <li>
                                                The application for refund should be signed by the Parent/Guardian and the Student.
                                            </li>
                                            <li>
                                                No Dues Certificate from the library is to be submitted along with the application for refund. Course material
                                                supplied need not be returned.
                                            </li>
                                            <li>
                                                Application for refund should be submitted in our office by hand or through a registered post. Those who submit
                                                the application for refund in person should ensure that proper acknowledgment is obtained for the same.
                                            </li>
                                            <li>
                                                Refund will be made in between 15 to 30 days of receipt of the application by way of cheque/Online Translations in
                                                favor of the student.
                                            </li>
                                            <li>
                                                Refund of Service Tax will be made as per the prevailing norms of service tax refund rules.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                    </div>

                                </div>

                                <div className="col-md-6 offset-md-3 mt-3">
                                    <table className="table border">
                                        <tr>
                                            <th>
                                                Before the commence of the class
                                            </th>
                                            <th>
                                                Gst (18%)
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>1 Week</td>
                                            <td>Gst + (RF)(10%)</td>
                                        </tr>
                                        <tr>
                                            <td>2 Week</td>
                                            <td>Gst + RF + 25% CF</td>
                                        </tr>
                                        <tr>
                                            <td>3 Week</td>
                                            <td>Gst + RF + 40% CF</td>
                                        </tr>
                                        <tr>
                                            <td>4 Week</td>
                                            <td>Gst + RF + 50% CF</td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-md-6 offset-md-3 mt-3 text-center">
                                    <span>No refund will be given after 4 week</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


