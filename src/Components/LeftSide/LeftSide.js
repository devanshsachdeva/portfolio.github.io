import React from 'react';
import './LeftSide.css'

const LeftSide = () => {
    return (
        <div class="fixed left-3 md:left-5 bottom-0 z-30">
            <div class="flex flex-col  justify-center items-center ">
                <a href="mailto:sachdevansh@outlook.com">
                    <img src="/Assets/icons/mail.svg" alt="Email" class="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
                </a>
                <a href="https://www.linkedin.com/in/sachdevansh/">
                    <img src="/Assets/icons/linkedin.svg" alt="LinkedIn" class="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
                </a>
                <a href="https://www.facebook.com/sachdeva.devansh/">
                    <img src="/Assets/icons/facebook.svg" alt="Facebook" class="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
                </a>
                <a href="https://github.com/devanshsachdeva">
                    <img src="/Assets/icons/github.svg" alt="Github" class="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" />
                </a>
                <a href="https://www.instagram.com/thedevanshsachdeva/">
                    <img src="/Assets/icons/instagram.svg" alt="Instagram" class="w-6 md:w-8 mb-2 md:my-2 transition-all hover:opacity-40 transform hover:scale-75" style={{ color: 'red' }} />
                </a>
                <div class="h-20 md:h-32 mt-2 w-1/12 bg-violet">
                </div>
            </div>
        </div>
    );
}

export default LeftSide;
