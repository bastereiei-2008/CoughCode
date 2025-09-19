from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cough Code API")

# CORS: ตอนพัฒนาในเครื่อง + ตอนโปรดักชันบน Vercel
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    allow_origins=["https://coughcode.vercel.app"],
    allow_origin_regex=r"^https://.*\.vercel\.app$",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/ping")
def ping():
    return {"ok": True}

# ตัวอย่าง endpoint (ใส่โมเดลจริงภายหลัง)
@app.post("/predict")
async def predict(file: UploadFile = File(...), symptoms: str = Form("[]")):
    # TODO: โหลดไฟล์เสียง/เรียกโมเดลของคุณที่นี่
    # ด้านล่างให้ผลจำลองไว้เพื่อทดสอบ Flow
    return {
        "top3": [
            {"disease": "หวัดธรรมดา", "prob": 0.62},
            {"disease": "หลอดลมอักเสบ", "prob": 0.23},
            {"disease": "ปอดอักเสบ", "prob": 0.15},
        ],
        "advice": [
            "พักผ่อนให้เพียงพอ",
            "ดื่มน้ำอุ่นมาก ๆ",
            "หากมีอาการแย่ลงควรพบแพทย์"
        ]
    }
