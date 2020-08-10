import React, {useEffect} from 'react';
import ATable from './ATable'

const ADoctors = () => {
    return(
        <main>
            <header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
                        <div class="container">
                            <div class="page-header-content pt-4">
                                <div class="row align-items-center justify-content-between">
                                    <div class="col-auto mt-4">
                                        <h1 class="page-header-title">
                                            <div class="page-header-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg></div>
                                            Médicos
                                        </h1>
                                        <div class="page-header-subtitle">Mantenimiento de médicos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div class="container mt-n10">
                        <div class="card mb-4">
                            <div class="card-header">Tabla de datos extendida</div>
                            <div class="card-body">
                                <div class="datatable">
                                    <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4">

                                    <ATable ></ATable>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </main>
    );
}

export default ADoctors;

