function UserProfile(props) {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', backgroundColor: 'white' }}>
            <h2 style={{ color: 'blue', fontSize: '24px', marginBottom: '10px' }}>{props.name}</h2>
            <p style={{ margin: '5px 0', fontSize: '16px' }}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>Bio: {props.bio}</p>
        </div>
    );
}

export default UserProfile;
