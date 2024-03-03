import {
    addDoc,
    collection,
    doc,
    onSnapshot,
    getDoc,
    getDocs,
    query,
    orderBy,
    type Unsubscribe,
    Firestore,
    setDoc
} from 'firebase/firestore'

export default function() {
    const nuxtApp = useNuxtApp();
    const db = nuxtApp.$firestore;

    function  pickRandomTasks(arr: any[], n): {} {
        const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
        var selected;
        if (n <= arr.length){
            selected = shuffled.slice(0, n);
        } else {
            selected = shuffled
        }

        var tasks = {}
        selected.forEach(task => {
            tasks[task["id"]] = task;
            tasks[task["id"]]["status"] = "incomplete";          
        })
        return tasks
    }

    // attempt to retrieve game data
    // returns null if game does not exist
    async function checkGame(
        gameId: string,
    ) {
        try {
            const docRef = doc(db, "games", gameId)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                return docSnap
            } else {
                return null
            }
        } catch(error) {
            console.log(error)
            return null
        }
    }

    // returns a dictionary of tasks 
    // with "general" and "individual" as keys
    async function retrieveTasks() {
        const colRef = collection(db, "tasks")
        const querySnap = await getDocs(colRef)
        var tasks = {}
        querySnap.forEach((doc) => tasks[doc.id] = doc.data())
        return tasks
    }


    // returns a dictionary of players
    // found in a game with playerIds as keys
    async function retrievePlayers(
        gameId: string,
    ) {
        const docSnap = await checkGame(gameId)
        if (docSnap != null) {
            const players = docSnap.data()["players"]
            return players
        } else {
            console.log("error retrieving game info!")
            return null
        }
    }

    // randomly selects n individual tasks from
    // firebase to the given player for given game
    async function addGeneralTasks(
        gameId: string,
        numTasks: Number = 5,
    ) {
        const docRef = doc(db, "games", gameId)
        const generalTasks = (await retrieveTasks())["general"]["tasks"];
        const selectedTasks = pickRandomTasks(generalTasks, numTasks)
        const docSnap = checkGame(gameId)
        if (docSnap != null) {
            await setDoc(docRef, {"generalTasks" : selectedTasks}, { merge: true })
            return "success"
        } else {
            console.log("error retrieving game info!")
            return null
        }
    }

    // randomly selects n individual tasks from
    // firebase to the given player for given game
    async function addIndividualTask(
        gameId: string, 
        playerId: string,
        numTasks: Number = 5,
    ) {    
        const indivTasks = (await retrieveTasks())["individual"]["tasks"];
        const selectedTasks = pickRandomTasks(indivTasks, numTasks)
        const docSnap = checkGame(gameId)
        const docRef = doc(db, "games", gameId)
        if (docSnap != null) {
            const add = {}
            add[playerId] = selectedTasks
            await setDoc(docRef, {"indivTasks" : add}, { merge: true })
            return "success"
        } else {
            console.log("error retrieving game info!")
            return null
        }
    }

    return {
        addIndividualTask,
        retrievePlayers,
        addGeneralTasks,
    }
}