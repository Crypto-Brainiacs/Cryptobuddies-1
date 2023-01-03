import React from 'react'
import styles from '../styles/Signup.module.css'


const Signup = () =>{

	return(

		<>

			<div className={`${styles.main}`}>

				<div className={`${styles.back}`}>
					<a href=''>Back</a>
				</div>

				<img src='/images/crb53.png' />

				<div className={`${styles.maintext} text-center`}>
					Yayy, welcome Cryptobud! Get started by providing the right answers to the following information
				</div>

				<div className={`${styles.buttons} mt-3`}>

					<div className={`${styles.inputs} mt-4`}>
						<div className='mb-3'>Name</div>
						<input type='email' placeholder='Enter first and last name' className='p-3 mt-1 rounded d-block'/>
					</div>

					<div className={`${styles.inputs} mt-4`}>
						<div className='mb-3'>Email</div>
						<input type='email' placeholder='Enter email address' className='p-3 mt-1 rounded d-block'/>
					</div>

					<div className={`${styles.inputs} mt-4`}>
						<div className='mb-3'>Phone Number</div>
						<input type='number' placeholder='Enter phone number here' className='p-3 mt-1 rounded d-block'/>
					</div>

					<div className={`${styles.inputsgender} mt-4`}>
						<div className='mb-4'>Gender</div>
						<select className=' py-3 px-1'>
							<option></option>
							<option>Male</option>
							<option>Female</option>
						</select>
					</div>
					
					<div className={`${styles.inputs} mt-4`}>
						<div className='mb-3'>Profession</div>
						<input type='email' placeholder='Enter Profession here' className='p-3 mt-1 rounded d-block'/>
					</div>

					<div className={`${styles.inputs} mt-4`}>
						<div className='mb-3'>Bio</div>

						<textarea className='p-5 mt-1 rounded d-block' placeholder='Tell us a few words about yourself'>
							
						</textarea>
					</div>

					<button className='secondarybtn p-3 mt-5' type='submit'>
						Sign Up
					</button>
				</div>

				{/*<div className={`${styles.forgot}`}>
					<a href=''>Forgot Password?</a>

					<a href=''>Sign Up</a>
				</div>*/}
			</div>

		</>

	)


}

export default Signup