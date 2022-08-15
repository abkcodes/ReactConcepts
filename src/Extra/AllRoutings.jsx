import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import ClassForm from '../Tutorialforms/ClassForm';
import Form1 from '../Tutorialforms/Form1';
import ToastifyEx from '../Tutorialforms/ToastifyEx';
import Error from './Error';
import RouterExample from './RouterExample';

import FormUsingFunction from '../Tutorialforms/FormUsingFunction';
import CustomHooks from '../Hooks/CustomHooks';
import ListOfCustomers from '../Tutorialforms/ListOfCustomers';
import JsonServerDemo from './JsonServerDemo';
import Formik1 from '../FormicAndYep/Formik1';
import Formik2 from '../FormicAndYep/Formik2';
import FormikAndYup from '../FormicAndYep/FormikAndYup';
import FormikAndYup2 from '../FormicAndYep/FormikAndYup2';

import Employee from '../DifferentHooks/Employee';
import SpreadOperator from './SpreadOperator';
import UseMemo from '../DifferentHooks/UseMemo';
function AllRoutings() {
    return (
        <div>
          <Router>
            <Routes>
                <Route  path="/t" element={<RouterExample/>}></Route>
                <Route path="*" element={<Error />}></Route>
                <Route path="/form" element={<Form1 />}></Route>
                <Route path="/classform" element={<ClassForm />}></Route>
                <Route path="/toast" element={<ToastifyEx />}></Route>
                <Route path="/formclass" element={<FormUsingFunction />}></Route>
                <Route path="/hooks" element={<CustomHooks />}></Route>
                <Route path="/fetchall" element={<ListOfCustomers />}></Route>
                <Route path="/fetchjson" element={<JsonServerDemo />}></Route>
                <Route path="/formik1" element={<Formik1 />}></Route>
                <Route path="/formik2" element={<Formik2 />}></Route>
                <Route path="/formikyup" element={<FormikAndYup />}></Route>
                <Route path="/formikyup2" element={<FormikAndYup2 />}></Route>
                <Route path="/context" element={<Employee/>}></Route>
                <Route path="/spread" element={<SpreadOperator />}></Route>
                <Route path="/memo" element={<UseMemo />}></Route>
            </Routes>
            </Router> 
        </div>
    );
}

export default AllRoutings;