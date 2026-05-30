"use client";

import React from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function BookingModal({ doctorName, fee, slot }) {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const submitAppointment = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const appointment = Object.fromEntries(formData.entries())

    appointment.fee = fee;

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointment),
    });

    const data = await response.json();
    console.log(data);

    if (data.acknowledged) {
      toast.success(`Appointment with ${doctorName} booked successfully!`);
    }
  }

  return (
    <Modal>
      <Button
        className="shrink-0 whitespace-nowrap flex h-10 px-5 items-center justify-center rounded-3xl bg-white/85 text-sm font-bold text-[#0066FF] shadow-lg transition-transform hover:scale-[1.02] hover:bg-[#0066FF]/80 hover:text-white hover:font-extrabold active:bg-[#0066FF]/80 active:text-white active:font-extrabold active:scale-95 glass border-none">
        Book Now
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-blue-50 text-[#0066FF]">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Book Appointment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-gray-500 font-medium">
                Request a consultation with {doctorName}. Fee: BDT {fee}.
              </p>
            </Modal.Header>
            <Modal.Body className="p-5 mb-1">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={submitAppointment}>

                  <TextField className="w-full" name="doctorName" type="text" defaultValue={doctorName} isReadOnly>
                    <Label className="font-bold text-gray-700">Doctor Name</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <TextField className="w-full" name="patientName" type="text" defaultValue={user?.name || ""} isReadOnly>
                    <Label className="font-bold text-gray-700">Patient Name</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <TextField className="w-full" name="patientEmail" type="email" defaultValue={session?.user.email || ""} isReadOnly>
                    <Label className="font-bold text-gray-700">Patient Email Address</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    <Select
                      name="slot"
                      className="w-full"
                      classNames={{
                        value: "truncate whitespace-nowrap"
                      }}
                    >
                      <Label className="font-bold text-gray-700">Appointment Slot</Label>
                      <Select.Trigger className="bg-gray-50 border-none shadow-sm h-10 w-full">
                        <Select.Value placeholder="Select time" />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          {slot.map((s, index) => (
                            <ListBox.Item key={index} id={s} textValue={s}>
                              {s}
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>


                    <Select name="gender" className="w-full">
                      <Label className="font-bold text-gray-700">Gender</Label>
                      <Select.Trigger className="bg-gray-50 border-none shadow-sm h-10 w-full">
                        <Select.Value placeholder="Select gender" />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover>
                        <ListBox>
                          <ListBox.Item id="male" textValue="Male">Male</ListBox.Item>
                          <ListBox.Item id="female" textValue="Female">Female</ListBox.Item>
                          <ListBox.Item id="other" textValue="Other">Other</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>

                  </div>

                  <TextField className="w-full" name="phone" type="tel">
                    <Label className="font-bold text-gray-700">Phone Number</Label>
                    <Input placeholder="017XX-XXXXXX" className="bg-gray-50" />
                  </TextField>

                  <TextField className="w-full" name="date" type="date">
                    <Label className="font-bold text-gray-700">Preferred Date</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <div className="flex gap-2 justify-end mt-2">
                    <Button slot="close" variant="secondary" className="font-bold">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit" className="bg-[#0066FF] text-white font-bold shadow-md shadow-blue-500/30">
                      Confirm Booking
                    </Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}