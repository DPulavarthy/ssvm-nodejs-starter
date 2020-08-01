use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn say(s: &str) -> String { return String::from("Reply: ") + s; }