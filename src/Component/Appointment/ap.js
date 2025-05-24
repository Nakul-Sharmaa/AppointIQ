import React from 'react';

const TodayAppointments = ({ appointments }) => {
    const today = new Date().toISOString().split('T')[0];

    const todaysAppointments = appointments.filter(app => app.date === today);

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Today's Appointments</h2>
            {todaysAppointments.length === 0 ? (
                <p style={styles.noData}>No appointments scheduled for today.</p>
            ) : (
                todaysAppointments.map((app, index) => (
                    <div key={index} style={styles.card}>
                        <div style={styles.photoContainer}>
                            <img
                                src={`data:image/jpeg;base64,${app.patientImage}`}
                                alt="Patient"
                                style={styles.userPhoto}
                            />
                        </div>
                        <div style={styles.infoContent}>
                            <div style={styles.detailsText}>
                                <p><strong>Name:</strong> {app.patientName}</p>
                                <p><strong>Age:</strong> {app.patientAge}</p>
                                <p><strong>Email:</strong> {app.patientEmail}</p>
                                <p><strong>Contact:</strong> {app.patientContact}</p>
                            </div>
                            <div style={styles.detailsText}>
                                <p><strong>Symptoms:</strong> {app.symptoms}</p>
                                <p><strong>Date:</strong> {app.date}</p>
                                <p><strong>Time:</strong> {app.time}</p>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

const styles = {
    container: {
            width: '100%',
        background: 'linear-gradient(to bottom, #ffffff, #ad68ad)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 30,
        borderRadius: 10,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
    },
    heading: {
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        background: '#fff',
        padding: '2rem',
        borderRadius: 10,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    photoContainer: {
        flex: 1,
        minWidth: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userPhoto: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        border: '3px solid #ccc',
        flexShrink: 0,
    },
    infoContent: {
        display: 'flex',
        gap: '2rem',
        flex: 1,
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    detailsText: {
        flex: 1,
        minWidth: 250,
    },
    noData: {
        textAlign: 'center',
        color: '#888',
    },
};

export default TodayAppointments;
