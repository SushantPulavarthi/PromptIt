# Project Name: PromptIT

Summary:
PromptIT is an innovative game that combines the power of AI-generated images with human creativity and ingenuity. The game revolves around players taking turns describing images generated by Stability AI’s Stable Diffusion Model. These descriptions are then used to generate new images, which are passed onto the next player for further description. Each round, the descriptions are evaluated by a Perplexity AI, considering factors like accuracy , creativity and detail. Additionally, PromptIT offers intriguing side challenges to keep gameplay engaging and diverse, such as restricting the use of certain words or mirroring image descriptions.

The platform is also designed from the ground up with Figma.

# Technologies Used:
 * Nuxt 3
 * Vue 3
 * Tailwind CSS
 * Firebase: Firestore, Realtime database and Firebase storage.
 * Google Auth
 * Stability.AI and Perplexity.AI

# Features:
* Utilises Stability.AI for generating images with its stable-diffusion-v1-6 model.
* Employs Perplexity AI’s mistral-7b-instruct model to evaluate player descriptions based on accuracy and creativity. Utilising prompt engineering to ensure a consistent, confident judging system to fairly award points.
* Offers various side challenges to add depth and excitement to the gameplay. Each of which are powered by fine-tuned prompts to get desired information.
* Automated game logic powered by Perplexity AI, including win condition calculation.
* Realtime live chat for communication between friends and keeping the gameplay interactive. Writing descriptions for the images is also real-time and adds a layer of suspense and keeps every player up to date on their friends’ statuses.
* Built with Nuxt 3, Vue 3, and Tailwind CSS for a modern and responsive player interface.
* Integrated with Firebase (Firestore, Firebase Realtime Database and Firebase Storage) for seamless data management and real-time updates.
* Google auth for easy sign up and login management.

# Setting up the server locally
We have an instance of the app set-up on Netlify at https://main--promptit.netlify.app/ (note that while the main functionalities of the app works, it could be buggy at times). The app should also be accessed through a computer instead of a mobile device. <br /> It is also quite simple to run this game locally. 
Node and npm are required to run the project. <br /> Each player would need to clone the repository and run the following command:
```
npm i
```
from within the root of the project to install the necessary packages before
running:
```
npm run dev
```
to initiate the server. 
Although each instance would run locally, they all connect to the same database and therefore could participate in multiplier games.

# How to Play:
* Register and sign in with a Google account.
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/376d4e04-88d2-4e2c-a09f-f89d5c7b0454)
* Create a game or join a game using a unique game code
* Share your game code with your friends (the more the merrier)
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/6697f5ce-4d0c-4bc3-ade4-9cb3f2e63563)
* Start the game and read through a short tutorial.
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/8a46c43d-08c7-4fb2-b551-2c67278c3de0)
* Players take turns describing AI-generated images provided by the Stability AI.
* Players can see each other writing into the main chat, but most of these inputs will be obfuscated realtime.
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/3a32ab31-b480-4420-8988-5b85894ac963)
* Descriptions are used to generate new images for the next player to describe.
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/da49d534-d7b7-4636-b32b-0872c416538e)
* Upon submitting their description, players are given unrestricted view to the generated images and other player prompts.
* Players can engage in side challenges to spice up the gameplay.
* At the end of each round, Perplexity AI evaluates descriptions based on accuracy and creativity at the end of each round while also checking against a list of dynamically generated side challenges to determine the number of points players get.
![image](https://github.com/dhaulagiri0/PromptIt/assets/29320673/614839a2-e7ec-4818-bf24-7be8a62148d9)
* The game continues until every player has gone first in a round (so for n players there would be n rounds).
* The player with the highest combined points at the end of the game wins.

# Innovation:
### Using multiple LLMs to handle backend logic: ###  
We believe that this technique is the way forward with application of LLMs in software development. Instead of simply using AI to guide coders, allowing a fine-tuned model to handle intricate logic can not only save time but also allow for more humanistic and non-deterministic algorithms (e.g. evaluating creativity and originality such as the metrics used in our game). We believe that the flexibility of such AI-backed algorithms have limitless potential. With strong prompt engineering a cohesive judging system was implemented taking on analysis that a standard algorithmic approach could not achieve in a couple of lines. This also makes the game easily flexible and expandable in the future, as new prompts can be written to enforce new game logic and expand upon the current ideas.
<br />
### Real-Time Updates and Data Management: ### 
Integrated with Firebase (Firestore), PromptIT offers real-time updates and efficient data management.
Interactive and Engaging: By combining AI-generated images with player descriptions, PromptIT offers an interactive and engaging gameplay experience. Players are not merely passive observers but active participants in shaping the game's narrative, fostering creativity and collaboration.
<br />
###  Longevity: ###  
incorporating an AI model into the core of our gameplay means that each session can be fresh and unique. With further training, models of different personalities could be created to make player-AI interaction more interesting, create more complex and dynamic side challenges or more uniquely themed images.
<br />
<br />
In the innovative intersection of artificial intelligence (AI) and gaming, our project employs prompt engineering to orchestrate a competition that marries human creativity with AI's analytical depth. This initiative not only exemplifies the fusion of human intellect with computational power but also pioneers a novel form of interactive entertainment that challenges and expands upon traditional gaming paradigms. Through the strategic crafting of prompts, we enhance the game's complexity and allure, challenging participants to push the boundaries of their creativity while engaging with AI-generated content that is both unpredictable and thought-provoking. Central to this endeavour is a meticulously designed adjudication system that evaluates submissions based on creativity, integrity, and the extent to which they meet the challenges posed. This system elevates the game beyond mere entertainment, creating a platform that celebrates human ingenuity and critically examines AI's capacity to emulate creative thought. The evaluation criteria emphasise our commitment to fostering an environment where imaginative expression thrives alongside ethical considerations. Furthermore, this project represents a confluence of AI's potential to revolutionise game development and a philosophical commitment to ethical technology use, setting the stage for future explorations at the intersection of AI, gaming, and ethical considerations in technology.

# Extension and Business Potential:
### Extension Potential: ###
* Additional AI Features: PromptIT can explore integrating more AI features, such as sentiment analysis for player descriptions or personalised image generation based on user preferences. These extensions could enrich the gameplay experience and offer new avenues for creativity and engagement.
* Seasonal or thematic games where images generated are based upon specific themes such as real-life events, memes, cultural phenomenon and more.
* Expanded Side Challenges: The side challenges in PromptIT can be expanded to include a wider variety of tasks and objectives, catering to different playstyles and preferences. This extension would add depth and diversity to the gameplay, ensuring long-term retention and enjoyment.

## Expanding PromptIT to include more game modes introduces a wealth of new opportunities for player engagement and enjoyment. Here's how we could expand the idea: ##

### AI-Based Werewolf Mode: ###
In this mode, players are assigned roles such as villagers and werewolves, each with different objectives.
The Stability AI generates character profiles for each player, including their roles and background stories.
Players engage in discussions and debates to identify the werewolves among them, while the werewolves try to conceal their identities and eliminate villagers.
The Perplexity AI evaluates players' arguments and interactions to determine the outcome of each round.
Side challenges could include tasks like convincing other players of your innocence or crafting convincing alibis.

### AI-Backed Puzzle Mode: ###
This mode incorporates AI-generated puzzles and riddles for players to solve individually or collaboratively.
The Stability AI creates unique puzzles with varying levels of difficulty, ensuring a challenging and engaging experience for players.
Players can compete against each other or work together to solve complex puzzles within a set time limit.
The Perplexity AI provides hints or evaluates players' solutions to offer feedback and assistance.
Side challenges could include speed-solving challenges or puzzle creation competitions.

### AI-Driven Trivia Mode: ###
In this mode, players answer trivia questions generated by the Stability AI across various categories and topics.
The questions are tailored to the players' interests and knowledge levels, ensuring a personalised and engaging trivia experience.
Players compete against each other to accumulate points by answering questions correctly within a time limit.
The Perplexity AI evaluates the accuracy and relevance of players' responses and adjusts the difficulty level accordingly.
Side challenges could include bonus rounds with themed trivia challenges or collaborative trivia quests.

### AI-Powered Storytelling Mode: ###
This mode allows players to collectively create stories and narratives based on AI-generated prompts and characters.
The Stability AI generates story prompts, character profiles, and plot twists for players to incorporate into their storytelling sessions.
Players take turns adding to the story, building upon each other's contributions to create a cohesive and engaging narrative.
The Perplexity AI evaluates the creativity and coherence of players' storytelling efforts, offering feedback and suggestions.
Side challenges could include storytelling competitions with specific themes or constraints, such as genre restrictions or word count limits.
<br />
<br />
Expanding PromptIT to include more game modes not only increases the diversity of gameplay experiences but also showcases the versatility and adaptability of AI technologies in gaming. These new modes offer endless possibilities for creativity, collaboration, and entertainment, catering to a broader audience of players with varying preferences and interests. Such expansions can also increase the longevity of PromptIT.



# Business Potential:
Subscription Model: PromptIT can adopt a subscription-based model, offering premium features and content to subscribers. This model provides a steady revenue stream and incentivizes ongoing engagement and loyalty among players.

Data Monetization: Leveraging the data generated by player interactions and preferences, PromptIT can explore opportunities for data monetization, such as targeted advertising or market research insights. This monetization strategy diversified revenue streams and maximised the value of the platform's user base.
Gartic Phone's success from a business perspective is highlighted by its effective monetization strategies and user growth. The game leverages in-game advertising and purchases for revenue, tapping into the mobile game industry's expected growth to $116.4 billion by 2024. Its user base has expanded, evidenced by a 10.53% traffic increase, and its appeal for team-building and community events contributes to its virality. Additionally, Gartic Phone's popularity on platforms like Twitch, with peak viewership numbers reaching 252,520, showcases its widespread appeal and potential for further growth.
Our game takes on a similar format, and targets those who maybe don’t have that artistic touch and helps further develop their understanding of ai. Our game can be considered a great way to practise prompt engineering and can be a fun and intuitive method of doing so.

## Potential as an Educational Game ##
Pivoting PromptIT towards being an education platform presents an exciting opportunity to leverage its core features for learning and skill development. Here's how PromptIT could serve as an effective educational tool while providing children with an engaging way to interact and familiarise themselves with AI:

### Writing Practice and Creativity: ###
PromptIT encourages players to write descriptions based on AI-generated images under time constraints. This activity inherently promotes writing practice and creativity as players must quickly articulate their thoughts and observations.
By challenging children to craft descriptive narratives, PromptIT helps improve their language skills, including vocabulary expansion, sentence structure, and storytelling abilities.
Visual Literacy and Critical Thinking:


Interacting with AI-generated images prompts children to analyse and interpret visual content, fostering visual literacy skills.
Encouraging players to describe and interpret images also promotes critical thinking as children must make observations, draw conclusions, and communicate their interpretations effectively.


### AI Familiarization and Ethical Considerations: ###
PromptIT offers children hands-on experience with AI technology by integrating Stability AI for image generation and Perplexity AI for evaluating descriptions.
Through gameplay, children can become familiar with AI concepts and capabilities, including image generation and natural language processing.
PromptIT also presents an opportunity to discuss ethical considerations surrounding AI, such as data privacy, bias, and algorithmic transparency, fostering digital literacy and responsible AI use among children.

### Accessibility and Inclusivity: ###
PromptIT's simple concept and user-friendly interface and diverse range of image prompts cater to different learning styles and preferences, making it accessible to a wide audience, including children with diverse backgrounds and abilities.
Customizable settings allow educators to adapt PromptIT to accommodate individual learning needs and preferences, ensuring inclusivity and personalised learning experiences.
By pivoting towards being an education platform, PromptIT not only provides children with a fun and interactive way to engage with AI but also promotes essential skills such as writing, critical thinking, and digital literacy, making it a valuable addition to the educational landscape.

# Team
* Joshua Gonsalves
* Kevin Wang
* Sushant Pulavarthi

Special thanks to our friend Ahmad Jamsari for providing us with a Perplexity.AI key and William Jones for vibes.




