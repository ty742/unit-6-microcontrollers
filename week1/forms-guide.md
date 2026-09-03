# Unit 6: Microcontrollers — Week 1 Microsoft Forms Setup Guide
## Unified Deliverables Template (Ready for Copy-Paste into Microsoft Forms)

Use this complete blueprint to create your **Week 1 Engineering Baseline Form** in Microsoft Forms with just a few clicks.

---

## ⚙️ Form Configuration Settings (In Microsoft Forms Settings):
- **Who can fill out this form**: `Only people in my organization can respond`
- **Record name**: `Checked` (Auto-captures student email & full name via Microsoft 365)
- **One response per person**: `Unchecked` or `Checked` (Checked prevents duplicates)
- **Allow response editing after submission**: `Checked` (Allows students to update reflections before the end of the session)
- **Send email receipt to respondents**: `Checked` (Ensures students retain a permanent copy of their baseline profile)

---

## 📋 Section 1: Student Information & Engineering Background

### Form Section Title:
**Section 1: Student Information & Workplace Context**
> *Welcome to the engineering development team. This baseline diagnostic helps establish your current strengths and where to focus your development throughout Unit 6. It is not a graded pass/fail exam.*

1. **Full Name**
   - *Type*: Text (Single line)
   - *Required*: Yes

2. **Student ID / College Number**
   - *Type*: Text (Single line)
   - *Required*: Yes

3. **Have you studied electronics before?**
   - *Type*: Choice
   - *Options*:
     - [ ] No previous experience
     - [ ] Some experience
     - [ ] Regular experience
     - [ ] Significant experience
   - *Required*: Yes

4. **Have you built electronic circuits before?**
   - *Type*: Choice
   - *Options*:
     - [ ] Never
     - [ ] Once or twice
     - [ ] Occasionally
     - [ ] Frequently
   - *Required*: Yes

5. **Have you used a multimeter before?**
   - *Type*: Choice
   - *Options*:
     - [ ] Never
     - [ ] With support
     - [ ] Independently
     - [ ] Confidently
   - *Required*: Yes

6. **Have you written program code before?**
   - *Type*: Choice
   - *Options*:
     - [ ] Never
     - [ ] A little (block-based / Scratch)
     - [ ] Text-based (Python / C / C++ / Arduino)
     - [ ] Regular programming experience
   - *Required*: Yes

---

## 📋 Section 2: Engineering Toolbox Diagnostic (Electronics & Math)

### Form Section Title:
**Section 2: Engineering Toolbox Diagnostic**
> *Complete the questions independently. If you are unsure, record your best reasoning.*

7. **Component Matching: Match each component to its function**
   - *Type*: Text or Likert / Matching
   - *Prompt*:
     - A. Resistor → (1. Emits light / 2. Stores charge / 3. Limits current / 4. Opens/closes circuit)
     - B. LED → ...
     - C. Capacitor → ...
     - D. Switch → ...
   - *Answer field*: Text (e.g. A-3, B-1, C-2, D-4)
   - *Required*: Yes

8. **Which of the following components have polarity (+ / -)? (Select all that apply)**
   - *Type*: Choice (Multiple answers allowed)
   - *Options*:
     - [ ] Resistor
     - [ ] LED
     - [ ] Electrolytic Capacitor
     - [ ] Battery / DC Supply
     - [ ] Switch
   - *Required*: Yes

9. **Briefly explain what could happen if a polarised component is connected backwards in a circuit.**
   - *Type*: Text (Long answer)
   - *Required*: Yes

10. **Ohm's Law Calculation: A 12 V supply is connected across a 240 Ω resistor. Calculate the circuit current in Amperes (I = V / R).**
    - *Type*: Text
    - *Required*: Yes (Expected: 0.05 A or 50 mA)

11. **Unit Conversion: Convert 4.7 kΩ to Ω, and convert 25 mA to A.**
    - *Type*: Text
    - *Required*: Yes (Expected: 4,700 Ω and 0.025 A)

---

## 📋 Section 3: Digital Systems Baseline

### Form Section Title:
**Section 3: Digital Systems Baseline**

12. **What is the difference between an analogue signal and a digital signal?**
    - *Type*: Text (Long answer)
    - *Required*: Yes

13. **Binary Conversion: Convert the 8-bit binary value `00001010` to decimal.**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: 10)

14. **In a 5 V microcontroller system (e.g. Arduino Uno), what voltage levels correspond to Logic HIGH (1) and Logic LOW (0)?**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: ≈ 5.0 V is HIGH, ≈ 0.0 V is LOW)

15. **Logic Gates: Complete the output for an AND gate and an OR gate when Input A = 1 and Input B = 0.**
    - *Type*: Text
    - *Required*: Yes (Expected: AND = 0, OR = 1)

---

## 📋 Section 4: Programming Baseline (Code Tracing & Modification)

### Form Section Title:
**Section 4: Programming Baseline**

16. **Code Tracing: Review the C++ code snippet below:**
    ```cpp
    int temperature = 25;
    int limit = 30;
    if (temperature > limit) {
        cout << "WARNING";
    } else {
        cout << "NORMAL";
    }
    ```
    - **What exact message will this program display?**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: `NORMAL`)

17. **Variable Assignment: If `count = 3` and then `count = count + 2`, what is the final value stored in `count`?**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: 5)

18. **Loop Tracing: In a loop `for (int i = 0; i < 4; i++)`, how many times does the loop execute?**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: 4 times)

19. **Code Modification: State what line you would change in the temperature program above if you wanted the warning to trigger at 20 degrees instead of 30 degrees.**
    - *Type*: Text (Single line)
    - *Required*: Yes (Expected: Change `int limit = 30;` to `int limit = 20;` or adjust if condition)

---

## 📋 Section 5: Practical Circuit, Safety Checklist & Evidence Upload

### Form Section Title:
**Section 5: Practical Circuit, Pre-Power Safety & Evidence Upload**

20. **Pre-Power Safety Gate Confirmation (Confirm each check completed before turning on power):**
    - *Type*: Choice (Multiple answers allowed)
    - *Options*:
      - [ ] Circuit layout matches schematic
      - [ ] Resistor value confirmed (330 Ω)
      - [ ] LED polarity verified (Anode to +5V via resistor, Cathode to 0V)
      - [ ] Power supply set to 5V DC before connecting
      - [ ] Meter configured properly for measurement
    - *Required*: Yes

21. **Recorded Multimeter Measurements:**
    - Supply Voltage (V_S): _______ V
    - Resistor Voltage (V_R): _______ V
    - LED Forward Voltage (V_F): _______ V
    - Measured Circuit Current (I): _______ mA
    - *Type*: Text (Long answer)
    - *Required*: Yes

22. **📸 Practical Evidence Upload (Upload your Wokwi Simulation screenshot, Breadboard Photo, and Multimeter Display):**
    - *Type*: **File Upload**
    - *File number limit*: 3 files
    - *Single file size limit*: 10MB or 100MB
    - *Allowed file types*: Word, Excel, PPT, PDF, Image, Video
    - *Required*: Yes

23. **Individual Baseline Self-Assessment (Rate your current confidence 1–5):**
    - *Type*: Likert
    - *Statements*:
      - Electronics & Components
      - Digital Systems & Binary
      - Microcontroller Programming
      - Electrical Measurement & Multimeters
      - Circuit Construction on Breadboard
    - *Rating Scale*: 1 (Need Significant Support) to 5 (Fully Confident)
    - *Required*: Yes

24. **Personal Development Priority: Based on today's baseline, what is the #1 skill you want to develop during Unit 6?**
    - *Type*: Text (Long answer)
    - *Required*: Yes

25. **Exit Ticket Reflection: List three things you did confidently, and one thing you found challenging today.**
    - *Type*: Text (Long answer)
    - *Required*: Yes
