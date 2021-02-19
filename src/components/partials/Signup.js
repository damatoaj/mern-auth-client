import { useState } from 'react';

const Signup = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //todo add form password verification

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`sending up new user data`, { name, email, password })
    }

    return (
        <section>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-elem">
                    <label htmlFor="name">Name: </label>
                    <input
                        //TODO see if i need an ID for the label to work
                        type='text'
                        name='name'
                        placeholder='Display Name'
                        onChange={e => setName(e.target.value)} 
                    />
                </div>
                <div className="form-elem">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Lovemtns@provider.com"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-elem">
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Create Password"
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Signup" />
            </form>
        </section>
    );
}

export default Signup;