import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import CreateProposalPage from './create_proposal_page';
import DiscountPage from './discount_page';
import HomePage from './home_page';
import ManageProposalPage from './manage_proposal_page';
import RatePage from './rate_page';
import ReviewPage from './review_page';
import SignInPage from './sign_in_page';



export function MainPage() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SignInPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/manage" element={<ManageProposalPage />} />
                <Route path="/createproposal" element={<CreateProposalPage />} />
                <Route path="/discount" element={<DiscountPage />} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/rate" element={<RatePage />} />

            </Routes>
        </Router>
    );
}