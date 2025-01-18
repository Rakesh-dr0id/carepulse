import RegisterForm from '@/components/forms/RegisterForm';
import { getUser } from '@/lib/actions/patient.actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP verification */}

      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />

          {/* <PatientForm /> */}
          <RegisterForm user={user} />

          <p className="copyright py-12 ">© 2024 CarePulse</p>
          {/* <div className="text-14-regular mt-20 flex justify-between">
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div> */}
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        alt="onboarding"
        width={1000}
        height={1000}
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
