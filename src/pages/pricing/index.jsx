import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react'

export default function index() {
    return (
        <div class="main-div">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center mt-5 mb-2">
                        <h2 class="fw-600">Pricing</h2>
                    </div>
                </div>
                <div class="row mt-4 mb-5">
                    <div class="col-12 text-center">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <td colspan="3">
                                        <h6 class="mb-0">Digital Content Program</h6>
                                    </td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>3,999/-</th>
                                    <th>5,999/-</th>
                                    <th>8,499/-</th>
                                </tr>
                                <tr>
                                    <td>3 Months</td>
                                    <td>6 Months</td>
                                    <td>9 Months</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
