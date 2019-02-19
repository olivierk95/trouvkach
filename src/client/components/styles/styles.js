import {css} from "emotion";
const color = "grey";

export const styles = {
    container: css(
        ` 
            width: auto;
            height: 100%;
            max-height: 100%;
            padding: 1.3rem;
            background-color: #1A2632;
            font-size: 1rem;
            border-radius: 1rem;
            color: #63C3D1;
            flex-direction: row;
   
        `,
    ),

    title: css(
        ` 
            margin: 0 auto;
            text-align: center;

   
        `,
    ),

    map_container: css(
        `
            
            background-color: white;
            border-radius: 1rem;
            text-align: center;
            max-width: 50rem;
            width: 100%;
            vertical-align: middle;
            border: .1rem solid #63C3D1;
            margin: 0 auto;
            &:hover {
                color: ${color};
            }

            .image-test {
                cursor:pointer;
                outline: none;
                width: 100%;
                height: 100%; 
                border-radius:1rem;
                
            }
               
        `,
    ),
};

export default styles;
