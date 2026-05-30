"use client";

import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, toast } from "@heroui/react";
import { authClient } from "@/lib/auth-client"
import { revalidateDashboard } from "@/app/action";

export function EditModal({session}) {
  console.log(session);

  
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    console.log("handle update called", data);

    const info = await authClient.updateUser({
      image: data.url,
      name: data.name,
    })

    await revalidateDashboard();
    toast.success("Profile Updated Successfully");

  }



  return (
    <Modal>
      <Modal.Trigger className="w-full">
        <Button className="w-full sm:w-auto px-5 py-2 bg-[#0066ff] text-white font-bold text-sm rounded-lg hover:scale-105 active:scale-95 transition-all">
          Edit Profile
        </Button>
      </Modal.Trigger>


      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-1">
              <Surface variant="default">

                <form className="flex flex-col gap-4" onSubmit={handleUpdate}>

                  <TextField className="w-full" name="name" type="text" variant="secondary" defaultValue={session?.user.name}>
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"/>
                  </TextField>

                  <TextField className="w-full" name="email" type="email" variant="secondary" defaultValue={session?.user.email} isReadOnly>
                    <Label>Email (Cannot be Edited)</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>

                  <TextField className="w-full" name="phone" type="tel" variant="secondary" defaultValue={session?.user.image}>
                    <Label>Profile URL</Label>
                    <Input placeholder="Enter your new profile picture url"/>
                  </TextField>

                  <div className="flex justify-end gap-4">
                    <Button slot="close" variant="secondary">Cancel</Button>
                    <Button type="submit" slot="close">Update Profile</Button>
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