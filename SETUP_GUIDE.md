# RL-INSTITUTE — Supabase Live Sync Build

This build uses Supabase as the shared source of truth for students, attendance, fee payments, test marks and payment requests.

## Before deploying
1. Back up the current Supabase project.
2. Review `SUPABASE_STARTER.sql`. If your tables already exist, apply only missing schema/policies (especially `payment_requests`) rather than blindly recreating production data.
3. Confirm the admin account has a `profiles` row with `role = admin`.
4. Confirm each student Auth account has a `profiles` row with `role = student` and the correct `student_id`.
5. Keep only the Supabase publishable key in frontend code. Never expose the service-role key.
6. Upload `index.html`, `logo.png`, and `qrscan.jpg` to the same GitHub Pages folder.

## Live sync
- Admin student list reads from `students`.
- Attendance saves to `attendance` using upsert by student/date.
- Marks save to `test_marks`.
- Fee records save to `fee_payments` and remain month-specific.
- Student dashboard reads the same tables, so admin changes appear after reload/login.
- Student UPI submissions use `payment_requests`; admin can approve/reject them. Approved requests are added to `fee_payments`.

## Important
Student account creation still depends on the existing `create-student` Edge Function. Editing a student profile updates the `students` table; it intentionally does not change the student's Auth password.
