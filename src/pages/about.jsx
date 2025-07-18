import React, { useEffect, useState } from 'react';

/*function About() {
  const [users, setUsers] = useState([]);       // Store fetched data
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null);     // Track error state

  useEffect(() => {
    //fetch('https://testproject.co.in/api/apiforapp/v1/wallet/add-money') // Sample API
    fetch('https://jsonplaceholder.typicode.com/users') // Sample API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once on mount

return <>
    <div className="container px-lg-5">
    <h4>User List from api</h4>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
      </div>
  </>
}*/



function About() {
  //const [name, setName] = useState('');
  const [userRegID, setUserRegID] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState('');
  const [requestForm, setRequestForm] = useState('');
  const [bankName, setBankName] = useState('');
  const [transactionID, setTransactionID] = useState('');
  const [paymentBy, setPaymentBy] = useState('');
  const [depositDate, setDepositDate] = useState('');
  const [remarks, setRemarks] = useState('');

  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = '25|9QLLMryDLgU5ZHxCLvlbLAxwY5zuoyBhZM1Jn0mjb5671de4'; 
    console.log(userRegID);
    try {
      const response = await fetch('https://testproject.co.in/api/apiforapp/v1/wallet/add-money', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Adding the Bearer token to the Authorization header
        },
        body: JSON.stringify({
          userRegID: userRegID,
          type: type,
          type: type,
          amount: amount,
          requestForm: requestForm,
          bankName: bankName,
          transactionID: transactionID,
          paymentBy: paymentBy,
          depositDate: depositDate,
          remarks: remarks,
        }),
      });
      
      console.log(response);

      if (!response.ok) {
        throw new Error('Failed to send data');
      }

      const data = await response.json();
      setResponseData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <div className="container-fluid header position-relative overflow-hidden p-0">
      <div className="hero-header overflow-hidden px-5">
        <div className="row gy-5 align-items-center">
          <h4>Post Data Example</h4>
          <div className="col-lg-12">
            <form onSubmit={handleSubmit}>
              <div className="col-lg-6 wow fadeInLeft">
                <input className="form-control" type="text" value={userRegID} placeholder="Enter Reg no" onChange={(e) => setUserRegID(e.target.value)}/>
                <select value={type} className="form-control">
                  <option value=""> Select </option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                </select>
                <input className="form-control" type="text" value={type} placeholder="Enter Type" onChange={(e) => setName(e.target.value)}/>
                <input className="form-control" type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
              </div>
              <div className="col-lg-6 wow fadeInRight">
                <input className="form-control"type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
                <input className="form-control" type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
                <input className="form-control"type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
                <input className="form-control" type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
                <input className="form-control" type="text" value={name} placeholder="Enter title" onChange={(e) => setName(e.target.value)}/>
              </div>
              <button type="submit">Send</button>
            </form>
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          {responseData && (
            <div>
              <h3>Response:</h3>
              <pre>{JSON.stringify(responseData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default About;