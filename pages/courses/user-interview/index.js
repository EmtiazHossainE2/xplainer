import HeroBanner from '@/src/components/v1/Courses/UserInterview/HeroBanner';
import CommonHead from '@/src/components/v1/Shared/CommonHead';
import PageLayout from '@/src/layout/PageLayout';
import React from 'react'

const UserInterview = () => {
  return (
    <>
      <CommonHead
        title={"Xplainerr - Interview Course"}
        description={"description"}
        favIcon={"/favicon.ico"}
      />
      <main>
        <PageLayout>
          <HeroBanner/>
        </PageLayout>
      </main>
    </>
  );
}

export default UserInterview