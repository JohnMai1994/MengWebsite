import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import bird1 from "../../image/bird1.png"
import bird2 from "../../image/bird2.png"
import forest from "../../image/forest.png"
import rocks from "../../image/rocks.png"
import water from "../../image/water.png"

const AboutStyle = styled.section`
    

`

const Section = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    overflow: hidden;
    
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        pointer-events: none;
    
    }
    
    :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100px;
        background: linear-gradient(to top, #22577a, transparent);
        z-index: 10;
        
    
    }
    

`

const H2 = styled.h2`
    position: absolute;
    color: #22577a;
    font-size: 10vw;
    text-align: center;
    line-height: 0.55em;
    font-family: "Rancho", cursive;
    transform: translateY(-50%);
  
    span {
        font-size: 0.2em ;
        letter-spacing: 2px;
        font-weight: 400;
    }


`

const Explore = styled.a`
    text-decoration: none;
    display: inline-block;
    padding: 8px 30px;
    background: #fff;
    color: #22577a;
    font-size: 1.2em;
    font-weight: 500;
    letter-spacing: 2px;
    border-radius: 40px;
    transform: translateY(100px);


`

const TextBox = styled.div` 
    position: relative;
    padding: 100px;

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





function About() {
    const Header = useRef();
    const Bird1Ref = useRef();
    const Bird2Ref = useRef();
    const Forest = useRef();
    const Button = useRef();
    const Rocks = useRef();
    const Water = useRef();




    const onScroll = () => {
        let value = window.scrollY;
        Header.current.style.top = 50 + value * -0.2 + "%";
        Bird1Ref.current.style.top = value * -1.5 + "px";
        Bird1Ref.current.style.left = value * 2 + "px";
        Bird2Ref.current.style.top = value * -1.5 + "px";
        Bird2Ref.current.style.left = value * -5 + "px";
        Button.current.style.marginTop = value * 1.5 + "px";
        Rocks.current.style.top = value * -0.12 + "px";
        Forest.current.style.top = value * 0.25 + "px";

    };


    useEffect(() => {
        document.addEventListener("scroll", onScroll)

        return () => {
           document.removeEventListener("scroll", onScroll)
        }

    })





    return (<AboutStyle >
        <Section >
            <H2 ref={Header}>
                <span>It's Time to Know Me~</span>
                <br/>
                About Me
            </H2>
            <img src={bird1} ref={Bird1Ref} />
            <img src={bird2} ref={Bird2Ref}/>
            <img src={forest} ref={Forest}/>
            <Explore href={"/about"} ref={Button}>Explore</Explore>
            <img src={rocks} ref={Rocks}/>
            <img src={water} ref={Water}/>

        </Section>

        <TextBox>
            <h2 >About Me</h2>
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

    </AboutStyle>)


}

export default About;