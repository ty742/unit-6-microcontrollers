# Unit 6 — Microcontroller Systems for Engineers
## Week 2 Resource Pack — From PC to Embedded Controller

**Week:** 2  
**Duration:** 3 hours  
**BTEC content:** A1, B1  
**Core practical hardware:** Arduino Uno  
**Core development tool:** PC + Arduino IDE  
**Core learning cycle:** **Predict → Investigate → Build → Run → Observe → Explain**

---

# 1. Weekly Workplace Scenario

### Scenario — The Junior Electronics Technician

You have joined a company as a junior electronics technician.

The company is replacing a simple mechanical control system with a programmable electronic controller.

Your supervisor gives you an **Arduino Uno** and asks:

> **"Before you start modifying the system, I need you to understand what each part of this system does and how the PC, microcontroller and external devices work together."**

You must investigate the system and produce evidence showing that you understand:

- what the microcontroller is
- what the processor does
- where the program is stored
- how inputs enter the system
- how outputs leave the system
- how the PC communicates with the Arduino
- how an Arduino can implement a simple control system

---

# 2. Learning Outcomes

By the end of the session, students will be able to:

### LO1 — Identify
Identify the main elements of an Arduino-based microcontroller system:

- PC
- Arduino IDE
- USB/programming connection
- ATmega328P microcontroller
- power supply
- digital I/O
- analogue inputs
- outputs
- communication/interface connections

### LO2 — Explain
Explain the functions of:

- processor
- memory
- inputs
- outputs
- interfaces

### LO3 — Describe
Describe how a:

**PC → Arduino Uno → external input/output**

system works to implement a simple control task.

### Success criteria

A student is successful when they can independently:

1. Point to the major parts of an Arduino Uno and name them.
2. Explain the purpose of the ATmega328P.
3. Explain the difference between an input and an output.
4. Explain why the PC is needed during development.
5. Explain what happens after the program has been downloaded to the Arduino.
6. Trace a simple control system from input → processing → output.
7. Use a datasheet to find basic technical information.

---

# 3. Equipment and Resources

## Physical equipment

| Item | Quantity | Purpose |
|---|---:|---|
| Arduino Uno | 1 per pair | Physical investigation |
| USB cable | 1 per Arduino | PC connection/programming |
| PC | 1 per student/pair | Investigation and programming |
| Breadboard | 1 per pair | Optional extension |
| LED | 1 per pair | Output investigation |
| 220–330 Ω resistor | 1 per pair | LED current limiting |
| Push button | 1 per pair | Optional input extension |
| Jumper wires | As required | Circuit connections |
| Multimeter | Optional | Power/voltage investigation |

## Digital resources

Students require access to:

- Arduino IDE
- Arduino Uno board diagram/image
- Arduino Uno technical documentation
- ATmega328P datasheet
- Week 2 student worksheet
- Week 2 Portfolio of Evidence template
- retrieval quiz
- exit ticket

---

# 4. Lesson Structure

| Time | Activity | Purpose | Evidence |
|---:|---|---|---|
| 0–10 min | Engineering Toolbox | Retrieve prior knowledge | Retrieval responses |
| 10–20 min | Workplace scenario | Establish engineering purpose | Initial prediction |
| 20–40 min | PC investigation | Establish computer architecture | Annotated PC diagram |
| 40–55 min | Input → Processing → Output | Introduce control-system model | System trace |
| 55–75 min | Arduino "Shrink the Computer" | Connect PC concepts to MCU concepts | Comparison table |
| 75–95 min | Arduino Anatomy | Physically identify Uno hardware | Annotated Arduino diagram |
| 95–115 min | Datasheet Investigation | Develop technical-document skills | Datasheet scavenger hunt |
| 115–125 min | Break | — | — |
| 125–145 min | PC → Arduino Development Chain | Understand programming workflow | Workflow diagram |
| 145–165 min | Predict → Run → Observe → Explain | Demonstrate program execution | Practical evidence |
| 165–175 min | Control-system challenge | Apply understanding | System explanation |
| 175–180 min | Exit retrieval | Check individual understanding | Exit ticket |

---

# 5. Activity 1 — Engineering Toolbox

## Purpose

Activate knowledge from Week 1 and establish the knowledge required for the new topic.

### Student task

Without using notes, answer:

1. What is voltage?
2. What is current?
3. What is resistance?
4. What does a resistor do?
5. What is a digital signal?
6. What is an analogue signal?
7. What is binary?
8. What does a computer program do?
9. What is an input?
10. What is an output?

### Challenge

Complete:

> **Input → __________ → Output**

Then give one real-world example.

### Teacher questioning

Ask:

- "Is a keyboard an input or an output?"
- "Is a monitor an input or an output?"
- "What processes the information?"
- "Where does the program run?"

Do not introduce the Arduino immediately. The purpose is to establish the concept before introducing the hardware.

---

# 6. Activity 2 — Workplace Scenario

Display:

> **A machine needs to detect whether a safety guard is closed. If the guard is closed, the machine can indicate READY. If the guard is open, the READY indicator must be OFF.**

Students individually predict:

### Question 1
What is the **input**?

### Question 2
What is the **processing element**?

### Question 3
What is the **output**?

### Question 4
What information must the program decide?

Students then compare their answers with a partner.

### Expected model

**Guard switch → microcontroller → LED**

Students should understand that the microcontroller is performing the decision-making between the input and output.

---

# 7. Activity 3 — Investigating the PC

## Purpose

Start with a familiar computer before introducing the microcontroller.

### Student task

Students identify the following on their PC:

| PC element | Student identifies | Function |
|---|---|---|
| Processor/CPU | ✓ | Processes instructions |
| RAM | ✓ | Temporary working memory |
| Storage | ✓ | Stores programs/files |
| Keyboard | ✓ | Input |
| Mouse | ✓ | Input |
| Display | ✓ | Output |
| USB | ✓ | Interface/communication |
| Power | ✓ | Supplies energy |
| Operating system/software | ✓ | Provides software environment |

### Investigation question

> **What happens when you press the letter "A" on the keyboard?**

Students create a simple sequence:

**Keyboard → computer processing → software/memory → display**

### Explain

The teacher introduces:

> A computer system receives information, processes it according to instructions and produces an output.

This becomes the conceptual bridge to microcontrollers.

---

# 8. Activity 4 — Input → Processing → Output

Students receive three cards:

**INPUT**

**PROCESSING**

**OUTPUT**

They are given examples:

- temperature sensor
- push button
- light sensor
- microcontroller
- processor
- LED
- motor
- buzzer
- display

### Student task

Place each item into the correct category.

Then construct three systems.

### Example 1

**Push button → microcontroller → LED**

### Example 2

**Temperature sensor → microcontroller → fan**

### Example 3

**LDR → microcontroller → lamp**

### Explain

For one system, students must explain:

> "The ______ is the input because..."

> "The ______ processes the information because..."

> "The ______ is the output because..."

This begins developing the language required for LO2.

---

# 9. Activity 5 — "Shrink the Computer"

## Purpose

Introduce the concept of a microcontroller by comparing it with a PC.

Display an Arduino Uno image/diagram.

Students compare:

| PC | Arduino Uno |
|---|---|
| CPU | ATmega328P |
| RAM | SRAM |
| Storage | Flash/EEPROM |
| Keyboard/sensors | Inputs |
| Screen/actuator | Outputs |
| USB/network interfaces | Communication interfaces |
| Power supply | Power input |
| Software | Microcontroller program |

### Key question

> **Is an Arduino a computer?**

Students must justify their answer.

### Teacher explanation

A microcontroller is essentially a small computer designed to control electronic systems.

It combines processing, memory and peripheral functions into a single integrated circuit.

The Arduino Uno provides a convenient development platform around the **ATmega328P**.

---

# 10. Activity 6 — Arduino Anatomy

## Physical investigation

Students work in pairs with an Arduino Uno.

They must physically locate and identify:

1. ATmega328P
2. Digital I/O pins
3. Analogue input pins
4. USB connection
5. Power connection
6. Reset button
7. Built-in LED
8. Communication/interface pins
9. Power indicator

### Student task

Annotate an Arduino Uno diagram.

For each item, record:

- name
- location
- purpose

### Example

**Digital I/O pins**

> Used to connect the microcontroller to external digital devices. Depending on configuration, a pin can be used as an input or output.

### Investigation challenge

Students answer:

> "Which parts can you identify just by looking at the board?"

Then:

> "Which information cannot be determined just by looking?"

This introduces the need for technical documentation.

---

# 11. Activity 7 — Datasheet Investigation

## Purpose

Develop engineering datasheet literacy.

Students are provided with an extract from the **ATmega328P datasheet**.

They complete the following scavenger hunt.

### Find:

| Question | Student answer |
|---|---|
| What is the microcontroller called? | |
| How many bits is the processor? | |
| How much Flash memory is available? | |
| How much SRAM is available? | |
| How much EEPROM is available? | |
| What is the maximum clock frequency? | |
| How many digital I/O capabilities are available? | |
| Are analogue inputs available? | |
| What communication interfaces are supported? | |

### Engineering question

> **Why is the datasheet useful if we already have the physical Arduino board?**

Students should recognise that the board shows physical features, while the datasheet provides technical specifications and operating information.

### Stretch

Explain:

> Why might SRAM, Flash and EEPROM be treated differently in a microcontroller system?

---

# 12. Activity 8 — PC → Arduino Development Chain

## Purpose

Establish the distinction between the **development computer** and the **embedded controller**.

Students connect the Arduino Uno to the PC.

### System diagram

Students complete:

**PC → USB → Arduino Uno → ATmega328P → ______**

The teacher introduces:

**Arduino IDE**

Students identify its purpose.

### Key concept

The PC is used to:

- write code
- edit code
- compile code
- check errors
- download the program
- monitor/debug the system

The Arduino then executes the downloaded program.

### Critical question

> **Does the Arduino need the PC connected to it to execute a previously downloaded program?**

Students predict before testing.

---

# 13. Activity 9 — Predict → Run → Observe → Explain

## Practical task

Students upload a simple LED blink program.

### Before running

Students predict:

- Will the LED turn on?
- Will it turn off?
- How long will it remain on?
- What will happen repeatedly?

### Run

Students upload the program to the Arduino.

### Observe

Students record what happens.

### Explain

Students complete:

> "The PC was used to __________."

> "The Arduino was used to __________."

> "The ATmega328P executes __________."

> "The LED is an example of a/an __________."

### Extension

Disconnect the USB cable if the hardware setup permits safe standalone power operation.

Students observe whether the program continues.

### Key conclusion

> The PC is primarily the development/programming environment. The microcontroller executes the downloaded embedded program.

---

# 14. Activity 10 — Control-System Challenge

## Workplace problem

A machine has a door fitted with a switch.

The requirement is:

> **When the door is closed, the green indicator should turn ON. When the door is open, the indicator should turn OFF.**

Students produce the system architecture:

**Door switch → digital input → ATmega328P → program → digital output → LED**

### Students must identify:

**Input:**  
Door switch

**Processing:**  
ATmega328P + program

**Output:**  
LED

### Students then explain the operation:

> "When the door changes state, the input provides information to the microcontroller. The program processes this information and determines whether the output should be switched on or off."

### Stretch

Ask:

> "What would happen if the program was removed?"

> "What would happen if the input was disconnected?"

> "What would happen if the LED was connected incorrectly?"

These questions prepare students for later fault-finding and system testing.

---

# 15. Activity 11 — Individual Questioning

Each student answers individually.

### Core questions

1. What is a microcontroller?
2. What is the function of the processor?
3. What is memory used for?
4. What is an input?
5. What is an output?
6. What is an interface?
7. What is the ATmega328P?
8. What is the purpose of the Arduino IDE?
9. Why is the PC used when developing an Arduino system?
10. Does the PC normally execute the control program while the Arduino is operating independently?
11. Trace the path of information from a switch to an LED.
12. Why would an engineer use a datasheet?

### Minimum expectation

Students should answer questions 1–10 correctly with appropriate technical vocabulary.

Questions 11–12 provide stronger evidence of LO2/LO3.

---

# 16. Portfolio of Evidence

## PoE B02 — Microcontroller System Investigation

Students submit:

### Evidence 1 — PC investigation

Annotated PC input → processing → output diagram.

### Evidence 2 — Arduino anatomy

Annotated Arduino Uno diagram identifying the major hardware elements.

### Evidence 3 — Datasheet investigation

Completed ATmega328P datasheet investigation.

### Evidence 4 — System architecture

Completed:

**Input → Processing → Output**

diagram for the workplace control system.

### Evidence 5 — Practical investigation

Photograph/screenshot showing the Arduino system operating.

### Evidence 6 — Technical explanation

Short written explanation answering:

> **"Explain how the PC, Arduino Uno and external I/O work together to implement a simple control system."**

### Evidence 7 — Individual questioning

Teacher records whether the student can independently explain:

- processor
- memory
- inputs
- outputs
- interfaces
- PC versus microcontroller roles

---

# 17. PoE Quality Criteria

| Level | Evidence |
|---|---|
| Developing | Names some Arduino components but explanations are incomplete. |
| Secure | Identifies major components and correctly explains their basic functions. |
| Strong | Clearly explains the relationship between PC, microcontroller, inputs and outputs. |
| Advanced | Uses technical terminology accurately and explains the complete system operation independently, including the role of the datasheet and development environment. |

---

# 18. Embedded Learning

### Digital literacy
- navigating Arduino IDE
- opening/saving program files
- reading technical information
- using digital technical documentation

### Mathematics
- binary concepts
- processor/data width
- memory quantities

### English/communication
- technical vocabulary
- explaining system operation
- interpreting datasheet information

### Employability
- working with a partner
- technical questioning
- recording evidence
- following an engineering investigation process
- explaining findings to a supervisor

### Problem solving
- identifying system elements
- tracing signal flow
- predicting system behaviour
- comparing prediction with observation

### Health and safety
- safe handling of electronic equipment
- correct USB/power connections
- avoiding short circuits
- safe use of laboratory equipment

---

# 19. SEND Scaffolding

Provide:

- labelled Arduino image
- partially completed architecture diagram
- vocabulary bank
- processor/input/output matching cards
- colour-coded input → processing → output diagrams
- chunked datasheet investigation
- pre-configured Arduino IDE
- worked example before independent task
- paired investigation roles

### Suggested paired roles

**Technician:** handles the physical hardware.

**Engineer:** records observations and explains the system.

Swap roles halfway through the practical.

---

# 20. Stretch and Higher-Attainment Tasks

Students who complete the core activities early should investigate:

### Challenge 1 — Memory

Explain the difference between:

- Flash
- SRAM
- EEPROM

### Challenge 2 — PC versus Arduino

> Why would an industrial machine normally use a microcontroller rather than a full desktop PC for a simple control task?

### Challenge 3 — Embedded operation

> Explain why the Arduino can continue executing a downloaded program after the PC is no longer actively controlling it.

### Challenge 4 — Engineering documentation

> Identify one piece of information available in the ATmega328P datasheet that cannot be reliably determined from physically inspecting the Arduino board.

---

# 21. Independent Guided Learning — Website

## IGL B02 — Microcontroller System Investigation

**Recommended time: 60 minutes**

Students complete the following sequence on the Unit 6 website.

### Task 1 — Interactive concept check
**10 min**

Complete an Input → Processing → Output activity.

### Task 2 — Arduino Anatomy
**15 min**

Click/identify the major sections of the Arduino Uno.

### Task 3 — Datasheet Scavenger Hunt
**20 min**

Find five technical specifications in the ATmega328P datasheet.

### Task 4 — Retrieval Quiz
**10 min**

Complete ten questions covering:

- processor
- memory
- inputs
- outputs
- interfaces
- Arduino IDE
- PC versus microcontroller

### Task 5 — One-minute explanation
**5 min**

Record or write:

> "Explain how an Arduino-based microcontroller system works."

This becomes an early baseline for technical communication.

---

# 22. Website Structure

The Week 2 page should contain:

**START HERE**

→ Week 2 overview  
→ Workplace scenario  
→ Learning outcomes  
→ Success criteria

**LEARN**

→ PC investigation  
→ Input → Processing → Output  
→ Microcontroller concept  
→ Arduino Uno anatomy  
→ ATmega328P datasheet

**BUILD & TEST**

→ Arduino setup  
→ Blink investigation  
→ Predict → Run → Observe → Explain

**EVIDENCE**

→ PoE B02 instructions  
→ Arduino diagram template  
→ Datasheet worksheet  
→ System architecture template  
→ Practical evidence upload

**CHECK YOURSELF**

→ Retrieval quiz  
→ Exit questions  
→ One-minute explanation

**EXTENSION**

→ Memory challenge  
→ PC versus microcontroller  
→ Embedded operation challenge

---

# 23. Teacher Preparation Checklist

Before the session:

- [ ] Arduino Uno boards available
- [ ] USB cables available
- [ ] PCs operational
- [ ] Arduino IDE installed/tested
- [ ] Correct Arduino board selected in IDE
- [ ] Test program prepared
- [ ] Arduino Uno diagram available
- [ ] ATmega328P datasheet extract available
- [ ] Student worksheet prepared
- [ ] PoE B02 template available
- [ ] Retrieval questions prepared
- [ ] Practical equipment checked
- [ ] SEND scaffold versions prepared

### Teacher should test beforehand

Connect an Arduino Uno to a PC and confirm that:

**PC → Arduino IDE → USB → Arduino Uno → program execution → LED**

works before the lesson.

---

# 24. End-of-Session Exit Ticket

Students answer independently.

### Q1
What is the main processing device on the Arduino Uno?

### Q2
Give one example of an input.

### Q3
Give one example of an output.

### Q4
What is the purpose of memory?

### Q5
What is the purpose of the Arduino IDE?

### Q6
Complete:

**Input → __________ → Output**

### Q7
Explain the difference between what the PC does and what the microcontroller does.

### Q8
Why might an engineer need a datasheet?

### Final question

> **A temperature sensor is connected to an Arduino and an LED indicates when the temperature is too high. Describe what happens from the sensor detecting the temperature to the LED changing state.**

---

# 25. Teacher Assessment Decision

At the end of Week 2, classify each learner:

| Status | Meaning | Action |
|---|---|---|
| 🟢 Secure | Can identify, explain and describe independently | Continue |
| 🟡 Developing | Can identify but explanations are incomplete | Retrieval + targeted support |
| 🔴 Not yet secure | Cannot reliably identify system elements or explain signal flow | Catch-up activity before progressing |

### Critical misconception check

Before moving to Week 3, every student should understand:

> **The Arduino Uno is not simply an "LED board". It is a microcontroller development system.**

and:

> **The PC is used to develop/download the program; the microcontroller executes the embedded program.**

---

# 26. Week 2 Resource File Set

Recommended generated files:

```text
UNIT-6/
└── WEEK-02-Microcontroller-System-Launch/
    ├── 01-Teacher/
    │   ├── Week-02-Lesson-Guide.md
    │   ├── Week-02-Teacher-Questions.md
    │   └── Week-02-Assessment-Checklist.md
    │
    ├── 02-Student/
    │   ├── Week-02-Student-Workbook.md
    │   ├── Arduino-Anatomy-Worksheet.md
    │   └── Datasheet-Scavenger-Hunt.md
    │
    ├── 03-Practical/
    │   ├── Arduino-Blink-Investigation.md
    │   ├── Input-Process-Output-Challenge.md
    │   └── Door-Safety-System-Challenge.md
    │
    ├── 04-Portfolio/
    │   ├── PoE-B02-Microcontroller-System-Investigation.md
    │   └── PoE-B02-Assessment-Checklist.md
    │
    ├── 05-Retrieval/
    │   ├── Engineering-Toolbox-W02.md
    │   └── Week-02-Exit-Ticket.md
    │
    ├── 06-IGL/
    │   ├── IGL-B02-Microcontroller-Investigation.md
    │   └── IGL-B02-Quiz.md
    │
    └── 07-Website/
        └── Week-02-Page-Content.md
```

# 27. Week 2 Learning Flow

The complete session follows one coherent engineering story:

**Familiar system**

PC

↓

**What does a computer actually do?**

Input → Processing → Output

↓

**Shrink the computer**

Microcontroller

↓

**Investigate the real hardware**

Arduino Uno

↓

**Look beyond the hardware**

ATmega328P datasheet

↓

**Develop the system**

PC → IDE → USB → Arduino

↓

**Test the system**

Predict → Run → Observe → Explain

↓

**Apply the knowledge**

Switch → Arduino → LED

↓

**Explain the engineering system**

**Input → Processing → Output**

↓

**Capture evidence**

**PoE B02 — Microcontroller System Investigation**