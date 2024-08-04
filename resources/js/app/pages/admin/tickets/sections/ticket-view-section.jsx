import {
    ClockIcon,
    DocumentTextIcon,
    FolderIcon,
    PencilSquareIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import ProjectDetailsTabContentSection from "./project-details-tab-content-section";
import FileTabContentSection from "./file-tab-content-section";
import ActivitiesTabContentSection from "./activities-tab-content-section";
import ItPersonnelTabContentSection from "./it-personnel-tab-content-section";
import { useDispatch, useSelector } from "react-redux";

export default function TicketViewSection() {
    const { path } = useSelector((state) => state.tickets);
    const dispatch = useDispatch();

    return (
        <div>
            <div className="flex items-center justify-between flex-1 space-y-4 py-3 px-3 rounded-t-lg bg-slate-500">
                <div className="mb-4 w-full relative">
                    <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                        <li className="me-3 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:text-white hover:bg-slate-600 p-4 border-b-2 rounded-t-lg ${activeTab === 'profile' ? 'bg-white' : ''} w-full`} id="profile-tab" onClick={() => handleTabClick('profile')} type="button" role="tab" aria-controls="profile" aria-selected={activeTab === 'profile'}>
                                <DocumentTextIcon className='h-5 w-5 mr-1' /> Project Details
                            </button>
                            {path === "details" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="me-3 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:text-white hover:bg-slate-600 p-4 border-b-2 rounded-t-lg ${activeTab === 'dashboard' ? 'bg-white' : ''} w-full`} id="dashboard-tab" onClick={() => handleTabClick('dashboard')} type="button" role="tab" aria-controls="dashboard" aria-selected={activeTab === 'dashboard'}>
                                <FolderIcon className='h-5 w-5 mr-1' /> Files
                            </button>
                            {path === "files" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="me-3 flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:text-white hover:bg-slate-600 p-4 border-b-2 rounded-t-lg ${activeTab === 'settings' ? 'bg-white' : ''} w-full`} id="settings-tab" onClick={() => handleTabClick('settings')} type="button" role="tab" aria-controls="settings" aria-selected={activeTab === 'settings'}>
                                <ClockIcon className='h-5 w-5 mr-1' /> Activities
                            </button>
                            {path === "activities" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                        <li className="flex-1 relative" role="presentation">
                            <button className={`flex items-center justify-center hover:text-white hover:bg-slate-600 p-4 border-b-2 rounded-t-lg ${activeTab === 'contacts' ? 'bg-white' : ''} w-full`} id="contacts-tab" onClick={() => handleTabClick('contacts')} type="button" role="tab" aria-controls="contacts" aria-selected={activeTab === 'contacts'}>
                                <PencilSquareIcon className='h-5 w-5 mr-1' /> I.T Personnel Notes
                            </button>
                            {path === "notes" && (
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-white rounded-t-lg"></div>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
            <div id="default-tab-content h-screen">
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "details" ? "block" : "hidden"
                    }`}
                    id="details"
                    role="tabpanel"
                    aria-labelledby="details-tab"
                >
                    <ProjectDetailsTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "files" ? "block" : "hidden"
                    }`}
                    id="files"
                    role="tabpanel"
                    aria-labelledby="files-tab"
                >
                    <FileTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "activities" ? "block" : "hidden"
                    }`}
                    id="activities"
                    role="tabpanel"
                    aria-labelledby="activities-tab"
                >
                    <ActivitiesTabContentSection />
                </div>
                <div
                    className={`p-4 rounded-b-lg bg-gray-50 ${
                        path === "notes" ? "block" : "hidden"
                    }`}
                    id="notes"
                    role="tabpanel"
                    aria-labelledby="notes-tab"
                >
                    <ItPersonnelTabContentSection />
                </div>
            </div>
        </div>
    );
}
