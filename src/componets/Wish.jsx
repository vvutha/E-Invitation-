import React from 'react';
import '../assets/wish.css';
import Swal from 'sweetalert2';

const Wish = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d8e595f5-c38a-4c19-82d8-6b285f693a00");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
            event.target.reset(); // Clear the form after successful submission
        } else {
            Swal.fire({
                title: "Error!",
                text: "Something went wrong. Please try again.",
                icon: "error"
            });
        }
    };

    return (
        <>
            <section className='contact'>
                <form onSubmit={onSubmit}>
                    <h2>សារជូនពរ</h2>
                    
                    <div className='input-box'>
                        <textarea 
                            name='message' 
                            className="field mess" 
                            placeholder='សរសេរសារជូនពរនៅទីនេះ' 
                            required 
                        />
                    </div>
                    <button className='mb-5' type='submit'>ផ្ញើសារជូនពរ</button>
                </form>
            </section>
        </>
    );
};

export default Wish;