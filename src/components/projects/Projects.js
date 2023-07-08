import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import poson from "../../assets/images/arposon.png"
import greeter from "../../assets/images/greeter.png"
import springreact from "../../assets/images/springreact.png"
import weena01 from "../../assets/images/weena01.png"
import touristo from "../../assets/images/touristo.png"
import helagpt from "../../assets/images/helagpt.png"
import weenav2 from "../../assets/images/weenav2.png"
import dean from "../../assets/images/dean.png"

const Projects = () => {


  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-5">
        <ProjectsCard
          title="Arposon"
          url="https://github.com/moshdev2213/ARPoson"
          des={(
            <>
              🌟✨ AR Poson: Experience the Magic of Augmented Reality Lanterns! ✨🏮
              <br />
              <br />
              AR Poson is an innovative Android app that combines augmented reality technology with the traditional celebration of Poson. The app brings the essence of Poson to life by showcasing virtual lanterns in an immersive and interactive way. 📱🏮
              <br />
              <br />
              With AR Poson, users can experience the beauty and significance of lanterns right from their smartphones. The app allows users to generate virtual lanterns in augmented reality, creating a mesmerizing visual spectacle. Each lantern is intricately designed, reflecting the rich cultural heritage and symbolism associated with Poson. 🌸🏮
              <br />
              <br />
              Immerse yourself in the serene atmosphere of Poson as you explore the virtual lanterns in AR. Interact with the lanterns, admire their intricate details, and learn about the deep-rooted traditions they represent. You can place the lanterns in your surroundings, capturing magical moments and sharing them with friends and family. 🌌✨AR Poson is not just an app; it's a gateway to experience the spiritual and cultural significance of Poson in a modern and captivating way. Embrace the enchanting world of AR lanterns and let the light of Poson illuminate your mobile device, creating a unique and memorable experience for all. ✨🏮💫
            </>
          )}

          src={poson}
        />
        <ProjectsCard
          title="greeter"
          url="https://github.com/moshdev2213/Greeter"
          des={<>
            🎉✨ Introducing Greeter: The Ultimate Greeting App! ✨🎉
            <br />
            Greeter is a user-friendly Android application to be developed(backend) using Android Studio, Kotlin, and Firebase. Its main purpose is to greet users on special occasions such as anniversaries, birthdays, and other memorable days. The app utilizes SMS services to send personalized greetings to the users added by the app's users. With a focus on a seamless user experience, Greeter ensures that every greeting is delivered in a timely and meaningful manner. 💌💫
            <br />
            Tech Stack:
            <br /><br />
            📚FireBase <br />
            📚Android Studio <br />
            📚Kotlin <br />
            📚API's <br /><br />
            Let's spread smiles and celebrate together! 🎊🎈🥳✉️🌟 Embrace the joy of connecting with loved ones and make their special moments even more memorable with the Greeter app. 🎉📱✨💌🌟
            <br />
            <br />
            Browse The Code now and start creating beautiful memories! 🎁📲💖🌟
          </>}
          src={greeter}
        />
        <ProjectsCard
          title="springboot & react"
          url="https://github.com/moshdev2213/springBoot_REST"
          des={<>Exciting News: I have successfully developed a simple Employee Management CRUD application using MySQL, Spring Boot, Postman, Spring Tool Suite, VS Code, and React! 🎉I am thrilled to share my latest accomplishment with you all. Inspired by a fantastic YouTube tutorial :<br /><b>🌟link: https://youtu.be/_thI-4AF7M8I</b> <br />embarked on this journey to enhance my skills in web development.This comprehensive project allowed me to dive into various technologies and frameworks.<br /><br />🌟MySQL as the database, <br />🌟SpringBoot for building the backend,<br /> 🌟React for frontend <br />🌟Postman for testing API endpoints <br />🌟Spring_Tool_Suite <br />🌟VS_Code <br /><br />Throughout the development process, I encountered numerous challenges that helped me strengthen my problem-solving abilities and improve my coding practices. From setting up the database schema to implementing CRUD operations, each step pushed me to expand my knowledge and refine my skills.The end result is a fully functional Employee Management system that enables users to create, read, update, and delete employee records. The application provides a seamless user experience with a clean and intuitive interface built using React.</>}

          src={springreact}
        />
        <ProjectsCard
          title="Weena Nadha v1.0"
          url="https://github.com/moshdev2213/WeenaNadha_V1.0"
          des={<>
            🎶🎵 Weena Nadha 1.0: Your Ultimate Online Music Store! 🎵🎶
            <br />
            <br />
            Weena Nadha 1.0 is an impressive web application developed as part of the Introduction to Web Technologies (IWT) course module in the first year at SLIIT. 💻📚
            <br />
            Tech Stack:
            <br /><br />
            📚PHP <br />
            📚MySQL <br />
            📚CSS <br />
            📚JavaScript <br />
            📚HTML <br /><br />
            Developed in VS Code with the assistance of XAMPP, Weena Nadha serves as a comprehensive online musical store. 🎸🎹🥁
            This platform offers a wide range of musical instruments for sale, catering to musicians of all genres and skill levels. From guitars to pianos, drums to saxophones, Weena Nadha has it all! 🎶🎻🎺
            <br />
            <br />
            With its intuitive and user-friendly interface, customers can easily browse through the diverse collection of instruments, access detailed product information, and make secure online purchases. 💻🛒
            Weena Nadha not only provides a seamless shopping experience but also ensures the utmost convenience and satisfaction for music enthusiasts. 🎵🎉
            Explore the world of music at Weena Nadha 1.0 and let the rhythm guide you to the perfect instrument for your musical journey! 🎶🌟
          </>}
          src={weena01}
        />
        <ProjectsCard
          title="HELAGPT"
          url="#projects"
          des={<>
            🤖📱 HELAGPT: Your Intelligent Chat Bot Companion! 🚀🗣️
            <br />
            🤖📱 HELAGPT: Your Intelligent Chat Bot Companion! 🚀🗣️
            HELAGPT is an innovative Android application that aims to create a powerful chat bot using the OpenAI API. With HELAGPT, users can engage in interactive conversations, both through text and voice chat. 🌐🎙️
            <br />
            Tech Stack:
            <br /><br />
            📚FireBase <br />
            📚Android Studio <br />
            📚Kotlin <br />
            📚HTTPok <br />
            📚API's <br /><br />
            This cutting-edge app combines the power of artificial intelligence with a user-friendly interface, allowing users to have natural and intelligent conversations with the chat bot. Whether you need assistance, information, or just a friendly chat, HELAGPT is here to help! 💬🤝
            Experience the future of communication with HELAGPT and unlock a world of possibilities with just a few taps on your smartphone. Get ready to chat like never before! 🤖💬📱
          </>}
          src={helagpt}
        />
        <ProjectsCard
          title="Touristo"
          url="https://github.com/moshdev2213/Touristo"
          des={(
            <>
              📱 Touristo is an innovative mobile Android-based project that was developed in collaboration with a dedicated team of four members: thiviru maneth , Wayani Jayawardhana , isuru supun , and Mohommad Shabeer . 🌍 This project aims to revolutionize tourist management in Sri Lanka by providing a comprehensive solution for tourists and administrators
              <br />
              <br />
              🔐 The project was built using Kotlin and Android Studio, harnessing the power of these technologies to create a robust and scalable application. QR code validations were implemented to ensure secure staff authentication, while the Room Persistence Database guarantees efficient and reliable data storage.
              <br />
              <br />
              🌟 With separate user interfaces for administrators and tourists, Touristo offers tailored functionalities and access levels. Administrators have comprehensive control over the system, managing bookings, staff, and villas, while tourists enjoy a seamless booking experience and access to essential tourist information.
              <br />
              <br />
              🚀 This collaborative effort showcases the dedication and expertise of the team members, as they worked together to create a high-quality application that enhances the overall travel experience in Sri Lanka. The project's GitHub repository, available at Touristo Repo, highlights their commitment to version control and efficient collaboration.
              <br /><br />
              🌴✨ Touristo represents a significant milestone in the team's journey, as they successfully combined their skills and knowledge to uplift Sri Lanka's tourism industry. With Touristo, tourists can explore the beauty of Sri Lanka while administrators efficiently manage and optimize tourist operations.
            </>
          )}
          src={touristo}
        />
        <ProjectsCard
          title="Weena nadha v2.0"
          url="https://github.com/moshdev2213/WeenaNadha_V2.0"
          des={(
            <>
              🎵🎸 Introducing WEENA NADHA v2.0: Your Ultimate Online Musical Instrument Store! 🎹🪕
              <br />
              Experience the power of music with the enhanced version of WEENA NADHA, a comprehensive platform for both admin and user management. 🛒💻
              <br />
              Tech Stack: <br /><br />
              🎵Java <br /> 🎵Servlet <br /> 🎵MySQL <br /> 🎵JSP <br /> 🎵Bootstrap <br /> 🎵Eclipse IDE
              <br />
              <br />
              Developed as a project for the 2nd year, 2nd semester OOP Java course, WEENA NADHA v2.0 showcases the collaborative efforts of Shabeer, Pavith, Wayani, and Supun, bringing their expertise in crafting an exceptional musical instrument shopping experience. 💪👨‍💻👩‍💻
              <br />
              <br />
              Browse through our vast collection of high-quality musical instruments, from guitars and keyboards to drums and more. With a user-friendly interface, detailed product information, and secure online transactions, WEENA NADHA v2.0 ensures a seamless and satisfying shopping journey for music enthusiasts. 🎶🛍️
              <br /><br />
              Unlock your musical potential, express your creativity, and let the melodies resonate with WEENA NADHA v2.0. Embrace the joy of music and embark on a musical adventure today! 🎵🎉🎻✨ <br />
              @2022 WeenaLk all rights reserved
            </>
          )}
          src={weenav2}
        />
        <ProjectsCard
          title="Dean Apparels"
          url="https://github.com/SLIITITP/y2_s2_wd_it_01-itp2023_s2_b02_g26"
          des={(
            <>
              👔💼 Introducing Dean Apparels: Elevating Men's Fashion to New Heights! ,With Best Apparel Management👕🧥
              <br />
              Dean Apparels, based in Kurunegala, is a renowned small business that specializes in creating, producing, and selling fashionable men's clothing. With its unique designs and premium quality products, Dean Apparels has gained a loyal customer base. 🤵🔝
              <br />
              Tech Stack: <br /><br />
              🎵Java <br /> 🎵Servlet <br /> 🎵MySQL <br /> 🎵JSP <br /> 🎵Bootstrap <br /> 🎵Eclipse IDE <br /> 🎵AJAX <br /> 🎵SweeT Alert
              <br />
              <br />
              To ensure efficient operations and maintain product excellence, the business has implemented an advanced ERP system. 🖥️✨ This robust system automates key activities including sales, inventory management, production, and financial operations. By streamlining these processes, Dean Apparels can meet the growing demand for their products while enhancing their market presence. 💪💼
              <br />
              <br />
              Experience the perfect blend of style and functionality with Dean Apparels. Explore our wide range of trendy clothing options and stay ahead in the fashion game. Embrace the confidence that comes with wearing Dean Apparels' impeccable fashion creations. 👖🕶️ 🎶🛍️
              <br /><br />
              Get ready to elevate your style with Dean Apparels and make a fashion statement that sets you apart from the crowd! ✨👔🔥
              <br />
              <br />
              Implementation Was Done In Order To Module FullFilment Of ITP 2nd Year 2nd Semester <br />
              Educational Purpose Only <br />
              @2023 WeenaLk all rights reserved
            </>
          )}
          src={dean}
        />
      </div>
    </section>
  );
}

export default Projects