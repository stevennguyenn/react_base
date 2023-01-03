tag = "TESTFLIGHT"

private_lane :connect_appconnect do 
  app = app_store_connect_api_key(
    key_id: ENV["KEY_ID"],
    issuer_id: ENV["ISSUER_ID"],
    key_filepath: ENV["AUTH_KEY_PATH"],
    duration: ENV["DURATION"],
    in_house: ENV["IN_HOUSE"],
  )
  log(msg: "app_store_connect_api_key: #{json(app)}", tag: tag)
end

private_lane :testflight_get_lastest_build_number do
  connect_appconnect
  latest_build_number = app_store_build_number(
    app_identifier: ENV["APP_ID"],
    live: false,
  )

  new_build_number = latest_build_number + 1

  log(msg: "new_build_number: #{new_build_number}", tag: tag)

  new_build_number
end

private_lane :deploy_to_testfilght do
  log(msg: "deploy_to_testfilght", tag: tag)

  release_version = upload_to_testflight(
    apple_id: ENV["APPLE_ID"],
    app_identifier: ENV["APP_ID"],
    api_key: Actions.lane_context[SharedValues::APP_STORE_CONNECT_API_KEY],
    beta_app_review_info: {
      contact_email: ENV["CONTACT_EMAIL"],
      contact_first_name: ENV["CONTACT_FIRST_NAME"],
      contact_last_name: ENV["CONTACT_LAST_NAME"],
      contact_phone: ENV["CONTACT_PHONE"],
      demo_account_name: ENV["DEMO_ACCOUNT_NAME"],
      demo_account_password: ENV["DEMO_ACCOUNT_PASSWORK"],
      notes: "Thank you for reviewing",
    },
    localized_app_info: {
      "default": {
        feedback_email: ENV["FEEDBACK_EMAIL"],
        marketing_url: ENV["MARKETING_URL"],
        privacy_policy_url: ENV["POLICY_URL"],
        description: "New version",
      }
    },
    localized_build_info: {
      "default": {
        whats_new: "Fix bug and improve performance",
      }
    },
    submit_beta_review: false,
    skip_waiting_for_build_processing: true,
  )

  log(msg: "release_version: #{release_version}", tag: tag)
end




