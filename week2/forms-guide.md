# Unit 6: Microcontroller Systems for Engineers
## Week 2 Student Workbook & Evidence Portfolio Guide
**Topic:** From PC to Embedded Controller (Architecture, Hardware Anatomy & Control Systems)  
**Level:** BTEC National / Higher Engineering  
**Criteria Covered:** A1 (Microcontroller Architecture & Elements), B1 (Hardware Interfaces & Development Environment)

---

## Student Details
- **Student Name:** __________________________________
- **Date:** ___________________
- **Assessor:** __________________________________

---

## 1. Engineering Toolbox Retrieval Evidence (A1)
*Retrieve foundational engineering knowledge to support microcontroller system analysis.*

| Concept | Your Definition / Technical Explanation |
|---|---|
| **Voltage (V)** | |
| **Current (I)** | |
| **Resistance (R)** | |
| **Digital Signal** | |
| **Analogue Signal** | |
| **Binary Representation** | |
| **Microcontroller vs Microprocessor** | |

---

## 2. Workplace Scenario: Junior Electronics Technician Investigation (A1, B1)
**Scenario Task:** *A manufacturing client is replacing a failure-prone mechanical relay control circuit with a programmable Arduino Uno Rev3 controller for a safety interlock system. You must analyze and document how the system functions.*

### System Architecture Trace:
1. **Input Subsystem (e.g. Safety Interlock Switch):**  
   *Describe how mechanical state converts to electrical signal:*  
   _______________________________________________________________________________________________

2. **Processing Subsystem (ATmega328P Microcontroller):**  
   *Explain how instructions stored in Flash memory execute decision logic:*  
   _______________________________________________________________________________________________

3. **Output Subsystem (e.g. Status LED / Solenoid Relay):**  
   *Explain how the pin voltage drives the actuator safely:*  
   _______________________________________________________________________________________________

---

## 3. PC vs Embedded Microcontroller Architecture Comparison (A1)
*Complete the comparative engineering analysis below:*

| Architectural Feature | Personal Computer (PC) | Arduino Uno Rev3 (Embedded MCU) |
|---|---|---|
| **Primary Processor** | High-performance multi-core (e.g. x86_64 / ARM64 @ 3+ GHz) | 8-bit ATmega328P AVR RISC @ 16 MHz |
| **Operating System** | Full OS (Windows, macOS, Linux) managing tasks | Bare-metal firmware (No OS, continuous execution loop) |
| **Program Storage** | Secondary storage (SSDs, HDDs in Gigabytes/Terabytes) | Internal Flash Memory (32 KB total, 0.5 KB bootloader) |
| **Working Memory (RAM)** | Volatile RAM (8 GB – 64 GB) | Internal SRAM (2 KB) |
| **Non-Volatile Data** | Filesystem storage | Internal EEPROM (1 KB) |
| **Direct Hardware I/O** | Abstracted via USB, PCIe, OS drivers | Direct memory-mapped I/O registers & physical header pins |
| **Power Consumption** | 15 W – 500+ W | ~0.25 W (50 mA @ 5V typical) |
| **Real-time Determinism** | Non-deterministic (OS scheduling latency) | Highly deterministic (Direct cycle-accurate execution) |

---

## 4. Arduino Uno Rev3 Technical Datasheet Investigation (B1)
*Using official Arduino Uno Rev3 Technical Specifications ([docs.arduino.cc/hardware/uno-rev3](https://docs.arduino.cc/hardware/uno-rev3/#tech-specs)), locate and record the following verified parameters:*

- **Microcontroller Chip:** `ATmega328P`
- **Operating Voltage:** `5 V`
- **Input Voltage (Recommended limit via Barrel Jack/VIN):** `7 – 12 V` (Absolute limits: `6 – 20 V`)
- **Digital I/O Pins:** `14 total` (of which `6` provide PWM output)
- **PWM Digital I/O Pins:** `Pins 3, 5, 6, 9, 10, 11`
- **Analogue Input Pins:** `6 pins (A0 – A5, 10-bit ADC resolution)`
- **DC Current per I/O Pin (Maximum):** `20 mA recommended (40 mA absolute maximum rating)`
- **DC Current for 3.3V Pin:** `50 mA`
- **Flash Memory:** `32 KB (ATmega328P) of which 0.5 KB is used by the bootloader`
- **SRAM:** `2 KB (ATmega328P)`
- **EEPROM:** `1 KB (ATmega328P)`
- **Clock Speed:** `16 MHz (Crystal Oscillator)`
- **LED_BUILTIN Pin:** `Digital Pin 13`
- **USB Interface Chip:** `ATmega16U2 (programmed as USB-to-Serial converter)`

---

## 5. Development Chain Investigation (B1)
*Document the step-by-step pipeline when an engineer writes, compiles, and runs code on an embedded system:*

```
[ Engineer Source Code (C/C++ in IDE) ]
                 ↓  (Compilation via avr-gcc)
[ Machine Code (Hex / Binary Instructions) ]
                 ↓  (USB Serial Transmission via avrdude)
[ Arduino Bootloader (ATmega328P Flash) ]
                 ↓  (Writing to Flash Program Memory)
[ Bare-Metal Execution (setup() once → loop() indefinitely) ]
```

### Self-Reflection Questions:
1. *Why is the PC disconnected after uploading code in a standalone deployment?*  
   _______________________________________________________________________________________________
2. *What is the role of the 16 MHz crystal oscillator?*  
   _______________________________________________________________________________________________
3. *What happens to SRAM vs Flash memory when power is removed?*  
   _______________________________________________________________________________________________

---

---

## 6. Practical Programming Lab Progression (B1)

### Phase 1: Core Setup & Digital Output
1. **Explain the purpose of `void setup()` vs `void loop()`:**
   - `setup()`: _______________________________________________________________________________
   - `loop()`: ________________________________________________________________________________
2. **Digital Output Experiments:**
   - Record the exact line of code used to turn Pin 13 LED ON: `________________________________`
   - Record the exact line of code used to turn Pin 13 LED OFF: `_______________________________`
   - Explain how `delay(1000)` creates a 1 Hz blink frequency: `_______________________________`

### Phase 2: Digital Input Control with Pushbutton
1. **Explain why `pinMode(2, INPUT_PULLUP)` is used:**  
   _______________________________________________________________________________________________
2. **Pushbutton State Logic:**  
   - Released state voltage & digital reading: `_______________________________________________`
   - Pressed state voltage & digital reading: `________________________________________________`

### Phase 3: Stretch & Challenge — Dual-Button & Dual-LED Control System
**Industrial Machine Station Specification:**
- **Button 1 (Start on Pin 2)** → Illuminates **Green LED (Run on Pin 12)**
- **Button 2 (Stop on Pin 3)** → Illuminates **Red LED (Halt on Pin 13)**

*Paste or write your verified C++ sketch below:*
```cpp
const int BTN_START = 2;
const int BTN_STOP  = 3;
const int LED_RUN   = 12;
const int LED_HALT  = 13;

void setup() {
  // Your pin configurations here:
  
}

void loop() {
  // Your dual-control decision logic here:

}
```

### Phase 4: Laboratory Image Evidence Uploads
1. **Tinkercad Simulation Screenshot:**  
   Attach or upload verified screenshot showing schematic, resistor wiring, and interactive simulation.
2. **Physical Hardware Build Photo:**  
   Attach or upload clear high-resolution photograph showing your physical Arduino Uno, breadboard, switch, LED circuits, and wiring harness.

---

## 7. Assessor Feedback & Sign-Off
- **Criteria Achieved:** [ ] A1 Met  [ ] B1 Met
- **Feedback Comments:** _________________________________________________________________
- **Assessor Signature:** ____________________________ **Date:** ________________________
