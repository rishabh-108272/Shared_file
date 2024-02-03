import React from 'react';
import './css/Style_1.css';
function iput(){
    return(
        <div className='iput'>
             <div class="input">
            <form action="" method="post">
                <h3 class="Choose">Choose File</h3>
                <span class="material-symbols-outlined">
                    close
                    </span>
                <input type="file" name="file" id="file" required/>
                
                <div class="input_submit">
                    <input type="submit" value="Upload"/>
                    <span class="material-symbols-outlined" id="upload">
                        upload
                        </span>
                </div>
            </form>
        </div>
        </div>
    );

}

export default iput;