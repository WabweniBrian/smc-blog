"use client"

import { useState } from "react"
import { HardHatIcon, Plus, Pencil, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type HelmetContact = {
  id: string
  helmetId: string
  phoneNumber: string
}

export function HelmetContactList() {
  const [contacts, setContacts] = useState<HelmetContact[]>([
    { id: "1", helmetId: "H001", phoneNumber: "+1234567890" },
    { id: "2", helmetId: "H002", phoneNumber: "+0987654321" },
  ])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [editingContact, setEditingContact] = useState<HelmetContact | null>(null)
  const [newHelmetId, setNewHelmetId] = useState("")
  const [newPhoneNumber, setNewPhoneNumber] = useState("")

  const handleAddContact = () => {
    const newContact: HelmetContact = {
      id: Date.now().toString(),
      helmetId: newHelmetId,
      phoneNumber: newPhoneNumber,
    }
    setContacts([...contacts, newContact])
    setNewHelmetId("")
    setNewPhoneNumber("")
    setIsDialogOpen(false)
  }

  const handleEditContact = () => {
    if (editingContact) {
      const updatedContacts = contacts.map((contact) =>
        contact.id === editingContact.id ? { ...contact, helmetId: newHelmetId, phoneNumber: newPhoneNumber } : contact,
      )
      setContacts(updatedContacts)
      setEditingContact(null)
      setNewHelmetId("")
      setNewPhoneNumber("")
      setIsDialogOpen(false)
    }
  }

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
  }

  return (
    <div>
      <div className="mb-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Helmet Contact
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{editingContact ? "Edit Helmet Contact" : "Add Helmet Contact"}</DialogTitle>
              <DialogDescription>
                {editingContact
                  ? "Edit the contact details for this helmet."
                  : "Add a new contact number for a helmet."}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="helmetId" className="text-right">
                  Helmet ID
                </Label>
                <Input
                  id="helmetId"
                  value={newHelmetId}
                  onChange={(e) => setNewHelmetId(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="phoneNumber" className="text-right">
                  Phone Number
                </Label>
                <Input
                  id="phoneNumber"
                  value={newPhoneNumber}
                  onChange={(e) => setNewPhoneNumber(e.target.value)}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={editingContact ? handleEditContact : handleAddContact}>
                {editingContact ? "Save Changes" : "Add Contact"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Helmet ID</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <HardHatIcon className="mr-2 h-4 w-4" />
                  {contact.helmetId}
                </div>
              </TableCell>
              <TableCell>{contact.phoneNumber}</TableCell>
              <TableCell className="text-right">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    setEditingContact(contact)
                    setNewHelmetId(contact.helmetId)
                    setNewPhoneNumber(contact.phoneNumber)
                    setIsDialogOpen(true)
                  }}
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteContact(contact.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

