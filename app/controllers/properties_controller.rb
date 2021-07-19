class PropertiesController < ApplicationController
  before_action :set_property, only: [:show, :update, :destroy, :add_tenant]
  before_action :authorize_request, only:[:create, :update, :destroy]

  # GET /properties
  def index
    @properties = Property.all

    render json: @properties, include: :tenants
  end

  # GET /properties/1
  def show
    render json: @property, include: :tenants
  end

  # POST /properties
  def create
    @property = Property.new(property_params)
@property.user = @current_user
    if @property.save
      render json: @property, status: :created, include: :tenants
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  def add_tenant
    @tenant = Tenant.find(params[:tenant_id])

    @tenant.properties << @property
    render json: @property, include: :tenants
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_property
      @property = Property.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def property_params
      params.require(:property).permit(:name, :rent, :beds, :bath, :sq_ft, :address, :current_tenant, :rental_agreement, :next_maintenance, :amenities, :img_url)
    end
end
