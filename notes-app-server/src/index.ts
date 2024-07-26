import express from 'express';

import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());


app.get("/api/notes", async (req, res) => {
    // res.json({ message: "success!" });
    const notes = await prisma.note.findMany();
    res.json(notes);
})
// const { title, content } = req.body;
app.post("/api/notes", async (req, res) => {


try {
    const notes = await prisma.note.create(
        {   data: { title, content }}
    );
}
 catch (error) {
    
}
})

app.put("/api/notes/:id", async (req, res) => {
    const { title, content } = req.body;
    const id = parseInt(req.params.id);
})

app.listen(5000, () => {
    console.log("server running on localhost:5000");
})

