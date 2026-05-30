"use client";

import React, { useState } from "react";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, Select, ListBox, toast } from "@heroui/react";
import { revalidateDashboard } from "@/app/action";

const UpdateModal = ({ apt, session }) => {
  const [phone, setPhone] = useState(apt.phone);
  const [date, setDate] = useState(apt.date);
  const [gender, setGender] = useState(apt.gender);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = { phone, date, gender };

    const response = await fetch(`http://localhost:5002/appointments/${apt._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    });

    const data = await response.json();

    if (data.modifiedCount > 0) {
      await revalidateDashboard();
      toast.success("Appointment updated successfully!");
    }
  };

  return (
    <Modal>
      <Button className="flex-1 xl:flex-none px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-sm transition-colors rounded-full">
        Update
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-blue-50 text-[#0066FF]">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Appointment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-gray-500 font-medium">
                Update your consultation with {apt.doctorName}.
              </p>
            </Modal.Header>
            <Modal.Body className="p-5 mb-1">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={handleUpdate}>

                  <TextField className="w-full" name="doctorName" type="text" value={apt.doctorName} isReadOnly>
                    <Label className="font-bold text-gray-700">Doctor Name (Read Only)</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <TextField className="w-full" name="patientName" type="text" value={session?.user.name || ""} isReadOnly>
                    <Label className="font-bold text-gray-700">Patient Name (Read Only)</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <TextField className="w-full" name="patientEmail" type="email" value={session?.user.email || ""} isReadOnly>
                    <Label className="font-bold text-gray-700">Patient Email (Read Only)</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <div className="grid grid-cols-1 gap-4">

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

                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={setPhone}
                  >
                    <Label className="font-bold text-gray-700">Phone Number</Label>
                    <Input placeholder="017XX-XXXXXX" className="bg-gray-50" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="date"
                    type="date"
                    value={date}
                    onChange={setDate}
                  >
                    <Label className="font-bold text-gray-700">Preferred Date</Label>
                    <Input className="bg-gray-50" />
                  </TextField>

                  <div className="flex gap-2 justify-end mt-2">
                    <Button slot="close" variant="secondary" className="font-bold">
                      Cancel
                    </Button>
                    <Button slot="close" type="submit" className="bg-[#0066FF] text-white font-bold shadow-md shadow-blue-500/30">
                      Update Booking
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
};

export default UpdateModal;