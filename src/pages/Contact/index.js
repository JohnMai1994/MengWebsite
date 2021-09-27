import React, {useRef, useEffect} from "react";
import styled from "styled-components";

import Moon from "../../image/moon.png"
import Stars from "../../image/stars.png"
import MountainBehind from "../../image/mountains_behind.png"
import MountainFront from "../../image/mountains_front.png"


const ContactStyle = styled.div`



`

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;    
    overflow: hidden;
    background: #000102;
    
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    
    }
    
    :after{
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background: linear-gradient(to top, #160419 60%, transparent);
      z-index: 10;
   
    }
    
    


`


const Text1 = styled.h2`
    position: absolute;
    color: #fff;
    font-size: 10vw;
    text-align: center;
    line-height: 0.55em;
    font-family: "Rancho", cursive;
    transform: translateY(-150%);
    z-index: 1;


`


const Text2 = styled.span`
    position: absolute;
    right: -80px;
    color: #fff;
    text-align: center;
    line-height: 0.55em;
    font-size: 2vw;
    letter-spacing: 2px;
    font-weight: 400;
    font-family: sans-serif;
`


const TextBox = styled.div`
    position: relative;
    padding: 100px;
    background: #160419;

    h2{
      font-size: 3.5em;
      color: #fff;
      margin-bottom: 10px;
      
    
    }
    
    p {
      font-size: 1em;
      color: #fff;
    }

`


function Contact() {
    const text1 = useRef();
    const text2 = useRef();
    const stars = useRef();
    const moon = useRef();
    const mountainbehind = useRef();
    const mountainfront = useRef();

    const onScroll = () =>{
        let value = window.scrollY;
        text1.current.style.top = 50 + value * -0.05 + "%";
        text2.current.style.right = -80 + value * 2 + "px";
        moon.current.style.top = value * -2 + "px";
        stars.current.style.left = value * 0.2 + "px";
        mountainfront.current.style.top =value * -0.02 + "px";
        mountainbehind.current.style.top = value * -0.2 + "px";

    }

    useEffect(() => {
        document.addEventListener("scroll", onScroll)

        return () => {
            document.removeEventListener("scroll", onScroll)
        }

    })


    return <ContactStyle>
        <Section>
            <Text1 ref={text1}>
                Contact Me
            </Text1>
            <Text2 ref={text2}>
                Want to Know More?
            </Text2>
            <img src={Stars}  alt="stars" ref={stars}/>
            <img src={Moon} alt="" ref={moon}/>
            <img src={MountainBehind} alt="" ref={mountainbehind}/>
            <img src={MountainFront} alt="" ref={mountainfront}/>


        </Section>


        <TextBox>
            <h2>About Me</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur delectus odit placeat qui rem
                sapiente sunt. Adipisci alias commodi consequatur deserunt dignissimos ipsam iste, iure labore nulla
                quisquam repellendus soluta.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis culpa cupiditate dolore
                eius exercitationem explicabo labore libero minima nesciunt nostrum optio perferendis possimus
                provident, quo sit totam veniam vero voluptatibus. Ab accusamus alias eaque excepturi exercitationem,
                facere facilis illo ipsum, laudantium libero mollitia necessitatibus nobis obcaecati odit placeat
                quibusdam recusandae repudiandae sit sunt tempora temporibus ut, vero. Ab assumenda dicta dolorum
                eligendi et in laborum, neque odio perspiciatis, quasi quis, veniam! Animi corporis dolor harum libero
                nesciunt officia, quia repudiandae totam voluptatum? A asperiores commodi consequatur eaque eum
                explicabo ipsum itaque modi placeat tempora? Amet aperiam facilis voluptate!
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias animi asperiores
                assumenda, at blanditiis commodi debitis distinctio doloribus fugiat, fugit illo in ipsum iste itaque
                laudantium modi nemo non numquam officia officiis possimus recusandae reiciendis totam veritatis
                voluptas voluptate? Architecto dolores et ex exercitationem inventore ipsam natus numquam officiis
                quaerat vel. Accusamus explicabo in laborum neque pariatur quae quasi sit, totam voluptate! Beatae earum
                eos, hic, minima, molestiae nisi officia officiis quas quod recusandae rem sequi tenetur voluptatem?
                Aliquid, commodi cumque dolores doloribus earum eum harum inventore nam natus, neque nihil non nulla
                placeat praesentium quod sapiente suscipit totam vero vitae voluptates! Assumenda beatae consequuntur
                dicta dignissimos dolore dolores ducimus ea eos, exercitationem expedita explicabo facilis fuga in
                magnam modi nisi numquam obcaecati quam quidem rem repellendus repudiandae rerum saepe sint sunt vero
                voluptatem. A adipisci architecto aspernatur assumenda consectetur consequatur dolor eveniet explicabo
                facilis fugiat impedit maiores molestiae, mollitia necessitatibus non nulla odio officiis praesentium
                quia quibusdam quo, quos, suscipit tempora tempore vitae. Ad, alias, aliquid asperiores aspernatur culpa
                cum, deleniti dolorem dolorum enim eum exercitationem explicabo facere fugiat fugit itaque modi natus
                nemo officiis quidem repellat reprehenderit repudiandae sed similique sit tempore ullam unde veniam
                veritatis.

                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias animi asperiores
                assumenda, at blanditiis commodi debitis distinctio doloribus fugiat, fugit illo in ipsum iste itaque
                laudantium modi nemo non numquam officia officiis possimus recusandae reiciendis totam veritatis
                voluptas voluptate? Architecto dolores et ex exercitationem inventore ipsam natus numquam officiis
                quaerat vel. Accusamus explicabo in laborum neque pariatur quae quasi sit, totam voluptate! Beatae earum
                eos, hic, minima, molestiae nisi officia officiis quas quod recusandae rem sequi tenetur voluptatem?
                Aliquid, commodi cumque dolores doloribus earum eum harum inventore nam natus, neque nihil non nulla
                placeat praesentium quod sapiente suscipit totam vero vitae voluptates! Assumenda beatae consequuntur
                dicta dignissimos dolore dolores ducimus ea eos, exercitationem expedita explicabo facilis fuga in
                magnam modi nisi numquam obcaecati quam quidem rem repellendus repudiandae rerum saepe sint sunt vero
                voluptatem. A adipisci architecto aspernatur assumenda consectetur consequatur dolor eveniet explicabo
                facilis fugiat impedit maiores molestiae, mollitia necessitatibus non nulla odio officiis praesentium
                quia quibusdam quo, quos, suscipit tempora tempore vitae. Ad, alias, aliquid asperiores aspernatur culpa
                cum, deleniti dolorem dolorum enim eum exercitationem explicabo facere fugiat fugit itaque modi natus
                nemo officiis quidem repellat reprehenderit repudiandae sed similique sit tempore ullam unde veniam
                veritatis.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dignissimos ducimus error
                et, excepturi fugiat fugit hic incidunt iure iusto laboriosam laudantium libero, magni nam neque non
                odio optio praesentium quos reiciendis repudiandae saepe sit sunt suscipit vitae voluptas! Accusantium
                blanditiis earum eligendi incidunt voluptatum. Ab asperiores dignissimos eos minima sapiente! Aliquam
                aspernatur assumenda beatae corporis, dolore dolorem enim est eum facilis in ipsum iusto laboriosam
                mollitia necessitatibus non nulla quia quidem tenetur totam unde. Blanditiis illo, molestiae nemo odit
                pariatur quaerat ratione repudiandae sint sunt voluptates. Ab assumenda consectetur, ea eaque earum
                error facilis fugit illo illum numquam officia quas tenetur? Aperiam consectetur distinctio eos est
                eveniet fugiat hic illum inventore iure, iusto minus molestiae nobis nostrum odit pariatur saepe
                voluptas. Delectus, dolorum enim molestias non perspiciatis porro qui ut! Ab animi architecto
                consectetur culpa dicta dolor eos, expedita in ipsum iste quae quas, quis reiciendis ut vel?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum eaque neque nihil optio quas quia
                tempore unde. Doloribus nisi repellat repudiandae sit! Fugiat labore pariatur quidem, repellat
                repellendus saepe sapiente! Eveniet excepturi hic nam officiis rem temporibus veniam? Doloribus
                exercitationem facere, iure laborum mollitia placeat repudiandae! Ab facere porro praesentium voluptas?
                Alias animi architecto aspernatur atque cum deleniti deserunt dicta dignissimos dolorem doloremque
                dolorum eligendi ex exercitationem explicabo fugit molestiae nemo nihil nisi nulla odit officia
                perferendis placeat provident quisquam similique soluta, unde ut vel voluptas voluptatem? Accusantium,
                deserunt ea enim ipsa itaque iure laboriosam natus obcaecati optio vel? Eligendi in iusto laboriosam
                necessitatibus nostrum, odio ratione tenetur voluptates? Animi blanditiis, consequatur dolorem excepturi
                explicabo facere in iure laborum, minus modi non nostrum officiis quibusdam quis quos repellendus
                sapiente sequi sunt. Aliquam dolores expedita, fugiat id ipsum iste minima nobis numquam officiis porro,
                provident unde ut veniam vero voluptatibus. Animi consequuntur dolore dolorem enim harum in, ipsum iusto
                laboriosam non nulla omnis possimus quos rem sit tenetur veniam voluptatum. Exercitationem illum, minus
                nam officia quae sunt ut. Autem corporis cumque earum magni tempora. Consectetur culpa dignissimos iste
                laboriosam non veniam. Consectetur deserunt mollitia nobis quae quia rem tenetur vitae.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque blanditiis culpa cupiditate dolore
                eius exercitationem explicabo labore libero minima nesciunt nostrum optio perferendis possimus
                provident, quo sit totam veniam vero voluptatibus. Ab accusamus alias eaque excepturi exercitationem,
                facere facilis illo ipsum, laudantium libero mollitia necessitatibus nobis obcaecati odit placeat
                quibusdam recusandae repudiandae sit sunt tempora temporibus ut, vero. Ab assumenda dicta dolorum
                eligendi et in laborum, neque odio perspiciatis, quasi quis, veniam! Animi corporis dolor harum libero
                nesciunt officia, quia repudiandae totam voluptatum? A asperiores commodi consequatur eaque eum
                explicabo ipsum itaque modi placeat tempora? Amet aperiam facilis voluptate!
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias animi asperiores
                assumenda, at blanditiis commodi debitis distinctio doloribus fugiat, fugit illo in ipsum iste itaque
                laudantium modi nemo non numquam officia officiis possimus recusandae reiciendis totam veritatis
                voluptas voluptate? Architecto dolores et ex exercitationem inventore ipsam natus numquam officiis
                quaerat vel. Accusamus explicabo in laborum neque pariatur quae quasi sit, totam voluptate! Beatae earum
                eos, hic, minima, molestiae nisi officia officiis quas quod recusandae rem sequi tenetur voluptatem?
                Aliquid, commodi cumque dolores doloribus earum eum harum inventore nam natus, neque nihil non nulla
                placeat praesentium quod sapiente suscipit totam vero vitae voluptates! Assumenda beatae consequuntur
                dicta dignissimos dolore dolores ducimus ea eos, exercitationem expedita explicabo facilis fuga in
                magnam modi nisi numquam obcaecati quam quidem rem repellendus repudiandae rerum saepe sint sunt vero
                voluptatem. A adipisci architecto aspernatur assumenda consectetur consequatur dolor eveniet explicabo
                facilis fugiat impedit maiores molestiae, mollitia necessitatibus non nulla odio officiis praesentium
                quia quibusdam quo, quos, suscipit tempora tempore vitae. Ad, alias, aliquid asperiores aspernatur culpa
                cum, deleniti dolorem dolorum enim eum exercitationem explicabo facere fugiat fugit itaque modi natus
                nemo officiis quidem repellat reprehenderit repudiandae sed similique sit tempore ullam unde veniam
                veritatis.
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dignissimos ducimus error
                et, excepturi fugiat fugit hic incidunt iure iusto laboriosam laudantium libero, magni nam neque non
                odio optio praesentium quos reiciendis repudiandae saepe sit sunt suscipit vitae voluptas! Accusantium
                blanditiis earum eligendi incidunt voluptatum. Ab asperiores dignissimos eos minima sapiente! Aliquam
                aspernatur assumenda beatae corporis, dolore dolorem enim est eum facilis in ipsum iusto laboriosam
                mollitia necessitatibus non nulla quia quidem tenetur totam unde. Blanditiis illo, molestiae nemo odit
                pariatur quaerat ratione repudiandae sint sunt voluptates. Ab assumenda consectetur, ea eaque earum
                error facilis fugit illo illum numquam officia quas tenetur? Aperiam consectetur distinctio eos est
                eveniet fugiat hic illum inventore iure, iusto minus molestiae nobis nostrum odit pariatur saepe
                voluptas. Delectus, dolorum enim molestias non perspiciatis porro qui ut! Ab animi architecto
                consectetur culpa dicta dolor eos, expedita in ipsum iste quae quas, quis reiciendis ut vel?
                <br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum eaque neque nihil optio quas quia
                tempore unde. Doloribus nisi repellat repudiandae sit! Fugiat labore pariatur quidem, repellat
                repellendus saepe sapiente! Eveniet excepturi hic nam officiis rem temporibus veniam? Doloribus
                exercitationem facere, iure laborum mollitia placeat repudiandae! Ab facere porro praesentium voluptas?
                Alias animi architecto aspernatur atque cum deleniti deserunt dicta dignissimos dolorem doloremque
                dolorum eligendi ex exercitationem explicabo fugit molestiae nemo nihil nisi nulla odit officia
                perferendis placeat provident quisquam similique soluta, unde ut vel voluptas voluptatem? Accusantium,
                deserunt ea enim ipsa itaque iure laboriosam natus obcaecati optio vel? Eligendi in iusto laboriosam
                necessitatibus nostrum, odio ratione tenetur voluptates? Animi blanditiis, consequatur dolorem excepturi
                explicabo facere in iure laborum, minus modi non nostrum officiis quibusdam quis quos repellendus
                sapiente sequi sunt. Aliquam dolores expedita, fugiat id ipsum iste minima nobis numquam officiis porro,
                provident unde ut veniam vero voluptatibus. Animi consequuntur dolore dolorem enim harum in, ipsum iusto
                laboriosam non nulla omnis possimus quos rem sit tenetur veniam voluptatum. Exercitationem illum, minus
                nam officia quae sunt ut. Autem corporis cumque earum magni tempora. Consectetur culpa dignissimos iste
                laboriosam non veniam. Consectetur deserunt mollitia nobis quae quia rem tenetur vitae.

            </p>
        </TextBox>
    </ContactStyle>


}

export default Contact;