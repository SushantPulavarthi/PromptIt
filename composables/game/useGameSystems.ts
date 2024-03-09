import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    query,
    orderBy,
    where,
    updateDoc,
    type Unsubscribe,
    type DocumentData,
    setDoc
  } from 'firebase/firestore'
  import { type User } from 'firebase/auth';
  import { storeToRefs } from 'pinia';
  
  export default function() {
    const { $firestore: db } = useNuxtApp();
    const { subscribePlayerState } = useUserState();


    // for simulating delay only, not needed in production
    function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    async function getNextImage(prompt: string):Promise<URL> {
        await delay(1000)
        console.log("image delay")
        const imageURL = new URL("https://en.anmosugoi.com/wp-content/uploads/2024/02/Sousou-no-Frieren-Frieren-portada.webp")
        return imageURL
    }


    // generate initial prompt with perplexity
    async function generateInitialPrompt(): Promise<string> {
        await delay(1000)
        console.log("prompt delay")
        return "Generate an image based on a worn-out detective's office, with a dusty bookshelf filled with mysteriously label-less books and a ticking clock on the desk, alongside a magnifying glass and a smoky pipe lying nearby."
    }
    // rates the creativity of the given prompt using perplexity
    // output is the number of points a user gets
    //  needs to be bounded between 0 and say 500 pts
    async function rateCreativity(prompt: string): Promise<Number> {
        await delay(1000)
        return Math.random() * (500 - 0) + 0;
    }

    // given the original prompt and a user generated prompt
    // rate how closely they resemble each other
    // output is the number of points a user would get
    async function rateCloseNess(promptOriginal: string, curPrompt: string): Promise<Number> {
        await delay(1000)
        return Math.random() * (500 - 0) + 0
    }

    return {
        getNextImage,
        generateInitialPrompt,
        rateCreativity,
        rateCloseNess,
    };

  }