import React from 'react';
import qrCodeImage from '../images/image-qr-code.png';

const QRCode = () => {
return (
    <div className="bg-LightGray h-screen flex justify-center items-center">
        <main>
            <div className="container mt-9 font-sans rounded-lg w-80 bg-white p-4">
                <div className="h-100 flex flex-col justify-center items-center space-y-10">
                    <div className="img bg-cover bg-center w-72 h-72 rounded-lg" style={{ backgroundImage: `url(${qrCodeImage})` }}></div>
                    <div className="description text-center">
                        <h2 className="font-bold text-2xl">Improve your front-end skills by building projects</h2>
                        <p className="mt-4 text-GrayishBlue" style={{ color: '#7a8c99' }}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                    </div>
                </div>
            </div>
        </main>
    </div>
);
};

export default QRCode;


