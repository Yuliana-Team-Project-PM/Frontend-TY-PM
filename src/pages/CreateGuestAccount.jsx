import React from 'react';

import LogoHeader from '../components/LogoHeader';
import VerticalBanner from '../components/VerticalBanner';
import '../assets/styles/components/CreateGuestAccount.scss';

import guest from '../assets/static/guest.png'

const CreateGuestAccount = () => {
    return(
        <> 
            <LogoHeader /> 
            <div className="CreateGuestAccount">
                <div className="CreateGuestAccount-form">
                    <h2>Cuenta de huesped</h2>
                    <form action="" className="CreateGuestAccount__fields">
                        <label htmlFor="">Nombre Completo</label>
                        <input type="text"/>
                        <label htmlFor="">Correo electrónico</label>
                        <input type="text"/>
                        <label htmlFor="">Contraseña</label>
                        <input type="text"/>
                        <label htmlFor="">Confirmar contraseña</label>
                        <input type="text"/>
                    </form>
                </div>
                <div><VerticalBanner ilustration={guest} /></div>
            </div>
        </>
    );
};

export default CreateGuestAccount;