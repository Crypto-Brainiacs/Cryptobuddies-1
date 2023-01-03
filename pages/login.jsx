import React from 'react'
import styles from '../styles/Login.module.css'


const Login = () =>{

	return(

		<>

			<div className={`${styles.main}`}>

				<div className={`${styles.back}`}>
					<a href=''>Back</a>
				</div>

				<img src='/images/crb55.png' />

				<div className={`${styles.maintext} text-center`}>
					Enter your registered email and password
				</div>

				<div className={`${styles.buttons} mt-3`}>

					<input type='email' placeholder='Enter email' className='p-3  rounded d-block'/>
					<input type='password' placeholder='Password' className='p-3  rounded d-block mt-3'/>

					<button className='secondarybtn p-3 mt-3' type='submit'>
						Log in
					</button>
				</div>

				<div className={`${styles.forgot}`}>
					<a href=''>Forgot Password?</a>

					<a href=''>Sign Up</a>
				</div>
			</div>

		</>

	)


}

export default Login