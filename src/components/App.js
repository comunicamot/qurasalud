import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';

import ADoctors from './Layouts/ADoctors';
import ANewDoctor from './Layouts/ANewDoctor';
import ADetailsDoctor from './Layouts/ADetailsDoctor';
import APerfil from './User/APerfil';
import ASpecialities from './Layouts/ASpecialities';
import ANewSpeciality from './Layouts/ANewSpeciality';
import ADetailsSpeciality from './Layouts/ADetailsSpeciality';
import APatients from './Layouts/APatients';
import ANewPatient from './Layouts/ANewPatient';
import ADetailsPatient from './Layouts/ADetailsPatient';
import AScheduleDoctor from './Layouts/AScheduleDoctor';
import AMedicalAppoHist from './Layouts/AMedicalAppoHist';
import ANewMedicalAppoHist from './Layouts/ANewMedicalAppoHist';

// import PMedicalHistory from './Layouts/PMedicalHistory';
// import PPerfil from './User/PPerfil';

const App = () => {

    return (
        <>
            <Switch>
                <Route exact path="/login" component={Login}></Route>

                <Route path="/perfil" component={APerfil}></Route>
                <Route path="/medicos" component={ADoctors}></Route>
                <Route path="/nuevo_medico" component={ANewDoctor}></Route>
                <Route path="/medico/detalles/:id" component={ADetailsDoctor}></Route>
                <Route path="/especialidades" component={ASpecialities}></Route>
                <Route path="/nueva_especialidad" component={ANewSpeciality}></Route>
                <Route path="/especialidad/detalles/:id" component={ADetailsSpeciality}></Route>
                <Route path="/pacientes" component={APatients}></Route>
                <Route path="/nuevo_paciente" component={ANewPatient}></Route>
                <Route path="/paciente/detalles/:id" component={ADetailsPatient}></Route>
                <Route path="/horario_medico" component={AScheduleDoctor}></Route>
                <Route path="/citas" component={AMedicalAppoHist}></Route>
                <Route path="/nueva_cita" component={ANewMedicalAppoHist}></Route>

                {/* <Route path="/profile" component={PPerfil}></Route>
                <Route path="/medical_history" component={PMedicalHistory}></Route> */}

                <Redirect path='/**' to='/login'></Redirect>
            </Switch>
        </>
    )
}

export default App;