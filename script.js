const WA="919625706356";
const modal=document.createElement("div");
modal.className="modal";
modal.innerHTML=`<div class="modal-bg"></div><div class="modal-box"><button class="close" aria-label="Close">×</button><div class="kicker">ADMISSION APPLICATION</div><h2>Apply for <span id="selectedClass"></span></h2><p class="modal-note">Fill in the details below. Your application will be prepared and sent to RL-33 Institute on WhatsApp.</p><form id="applyForm">
<div class="two"><label>Student Name*<input name="student" required placeholder="Student's full name"></label><label>Parent / Guardian Name*<input name="parent" required placeholder="Parent / guardian"></label></div>
<div class="two"><label>WhatsApp Number*<input name="phone" required placeholder="Contact number"></label><label>Student's Current Class<input name="current" id="currentClass" readonly></label></div>
<label>Preferred Batch / Timing<select name="timing"><option>Morning</option><option>Afternoon</option><option>Evening</option><option>Need timing guidance</option></select></label>
<label>School / Area<input name="school" placeholder="Optional"></label>
<label>Any Learning Concern / Requirement<textarea name="concern" placeholder="Weak subject, homework support, exam preparation, etc."></textarea></label>
<button class="submit" type="submit">SEND APPLICATION ON WHATSAPP →</button></form></div>`;
document.body.appendChild(modal);

let selected={};
document.querySelectorAll(".apply").forEach(btn=>btn.addEventListener("click",()=>{
 selected={className:btn.dataset.class,fee:btn.dataset.fee,subjects:btn.dataset.subjects};
 document.getElementById("selectedClass").textContent=selected.className;
 document.getElementById("currentClass").value=selected.className;
 modal.classList.add("show");
 document.body.classList.add("lock");
}));
modal.querySelector(".close").onclick=()=>{modal.classList.remove("show");document.body.classList.remove("lock")};
modal.querySelector(".modal-bg").onclick=()=>{modal.classList.remove("show");document.body.classList.remove("lock")};

document.getElementById("applyForm").addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.target);
 const msg=[
 "*RL-33 INSTITUTE — ADMISSION APPLICATION*","",
 `*Programme:* ${selected.className}`,
 `*Fee:* ${selected.fee}`,
 `*Subjects:* ${selected.subjects}`,
 `*Student Name:* ${f.get("student")}`,
 `*Parent/Guardian:* ${f.get("parent")}`,
 `*WhatsApp:* ${f.get("phone")}`,
 `*Current Class:* ${f.get("current")}`,
 `*Preferred Timing:* ${f.get("timing")}`,
 `*School / Area:* ${f.get("school")||"Not provided"}`,
 `*Learning Concern:* ${f.get("concern")||"None"}`,
 "","I would like to enquire/apply for admission."
 ].join("\n");
 location.href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
});

document.getElementById("helpForm").addEventListener("submit",e=>{
 e.preventDefault();
 const f=new FormData(e.target);
 const msg=[
 "*RL-33 INSTITUTE — GENERAL ENQUIRY*","",
 `*Name:* ${f.get("name")}`,
 `*WhatsApp:* ${f.get("phone")}`,
 `*Class:* ${f.get("class")}`,
 `*Help Type:* ${f.get("type")}`,
 `*Question / Requirement:* ${f.get("message")}`,
 "","Please contact me regarding this enquiry."
 ].join("\n");
 location.href=`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
});

document.getElementById("hamburger").onclick=()=>{
 const n=document.getElementById("nav");
 n.style.display=n.style.display==="flex"?"none":"flex";
 n.style.position="absolute";n.style.top="80px";n.style.left="0";n.style.right="0";
 n.style.background="#fff";n.style.padding="18px";n.style.flexDirection="column";
 n.style.borderBottom="1px solid #e4e8ee";
};
