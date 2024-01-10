import { InferSchemaType, model, Schema } from "mongoose";

const cardSchema = new Schema({
    name: { type: String, required: true},
    type: { type: String, required: false },
    color: { type: String, required: false },
    stage: { type: String, required: false },
    digi_type: { type: String, required: false },
    attribute:{ type: String, required: false },
    level: { type: String, required: false },
    play_cost: { type: String, required: false },
    evolution_cost: { type: String, required: false },
    cardrarity: { type: String, required: false },
    artist: { type: String, required: false },
    dp: { type: String, required: false },
    cardnumber: { type: String, required: true },
    maineffect: { type: String, required: false },
    soureeffect: { type: String, required: false },
    set_name: { type: String, required: true },
    card_sets: { type: String || [String], required: false },
    image_url: { type: String, required: true, },
});

type User = InferSchemaType<typeof cardSchema>;

export default model<User>("User", cardSchema);